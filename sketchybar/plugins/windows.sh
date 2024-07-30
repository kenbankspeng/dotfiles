#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

CACHE_DIR="/tmp/sketchybar_window_cache"
mkdir -p "$CACHE_DIR"

# Get space-windows mapping
spaces_query=$(yabai -m query --spaces)

num_spaces=$(echo "$spaces_query" | jq '. | length')
for ((space_index = 0; space_index < num_spaces; space_index++)); do
  # For each space object in the array
  space_info=$(echo "$spaces_query" | jq ".[$space_index]")
  space_id=$(echo "$space_info" | jq '.index')
  window_count=$(echo "$space_info" | jq '.windows | length')

  # Read existing windows from cache if it exists
  windows_cache_file="$CACHE_DIR/windows_$space_id"
  cached_windows=""
  [[ -f "$windows_cache_file" ]] && cached_windows=$(<"$windows_cache_file")

  # Allocate only needed windows
  if ((window_count > 0)); then
    for ((window_index = 0; window_index < window_count; window_index++)); do
      window_serial=$(echo "$space_info" | jq -r ".windows[$window_index]")

      echo "window_serial: $window_serial"

      # Skip if no window serial
      [[ "$window_serial" == "null" ]] && continue

      # Get app icon
      app_name=$(yabai -m query --windows --window "$window_serial" | jq -r '.app')
      icon="$($CONFIG_DIR/icon_map.sh "$app_name")"

      window_handle="window.$space_id.$window_index"
      echo "window_handle: $window_handle"
      if ! grep -q "$window_handle" <<<"$cached_windows"; then
        sketchybar --add item "$window_handle" left
        echo "$window_handle" >>"$windows_cache_file"
      fi

      window_props=(
        label.drawing=off
        icon.drawing=off
        padding_left=5
        padding_right=5
        icon.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE"
        icon.padding_left=2
        icon.padding_right=2
      )
      sketchybar --set "$window_handle" "${window_props[@]}" icon.drawing=on icon="$icon"
    done
  else
    window_handle="window.$space_id.0"
    if ! grep -q "$window_handle" <<<"$cached_windows"; then
      sketchybar --add item "$window_handle" left
      echo "$window_handle" >>"$windows_cache_file"
    fi
    sketchybar --set "$window_handle" label.drawing=on label='-' \
      padding_left=5 padding_right=5 icon.drawing=off
  fi

  # Remove any excess windows dynamically and update the cache
  new_cached_windows=""
  if ((window_count > 0)); then
    for ((window_index = 0; window_index < window_count; window_index++)); do
      new_cached_windows+="window.$space_id.$window_index"$'\n'
    done
  else
    new_cached_windows+="window.$space_id.0"$'\n'
  fi
  echo "$new_cached_windows" >"$windows_cache_file"

  # Remove windows that are no longer needed
  IFS=$'\n' read -r -d '' -a cached_windows_array <<<"$cached_windows"
  for cached_window in "${cached_windows_array[@]}"; do
    if ! grep -q "$cached_window" <<<"$new_cached_windows"; then
      sketchybar --remove "$cached_window"
    fi
  done

  # Group windows in the same space with a bracket
  bracket_cache_file="$CACHE_DIR/space_bracket_cache"
  touch "$bracket_cache_file"

  bracket_members=()
  if ((window_count == 0)); then
    bracket_members=("window.$space_id.0")
  else
    for ((window_index = 0; window_index < window_count; window_index++)); do
      bracket_members+=("window.$space_id.$window_index")
    done
  fi

  existing_bracket_entry=$(grep "^space$space_id " "$bracket_cache_file")
  if [[ -z "$existing_bracket_entry" ]]; then
    sketchybar --add bracket "space$space_id" "${bracket_members[@]}"
    echo "space$space_id ${bracket_members[*]}" >>"$bracket_cache_file"
  elif [[ "$existing_bracket_entry" != "space$space_id ${bracket_members[*]}" ]]; then
    sketchybar --remove "space$space_id"
    sketchybar --add bracket "space$space_id" "${bracket_members[@]}"
    sed -i '' "/^space$space_id /d" "$bracket_cache_file"
    echo "space$space_id ${bracket_members[*]}" >>"$bracket_cache_file"
  fi

  space_properties=(
    padding_left=10
    padding_right=10
    background.border_color=${ACCENTS[$((space_id - 1))]}
    background.border_width=2
    background.corner_radius=4
    background.height=30
  )
  sketchybar --set "space$space_id" "${space_properties[@]}"
done

# Sort the windows by space_id and window_index
all_window_items=($(sketchybar --query bar | jq -r '.items[]' | grep '^window\.' | sort -t '.' -k2,2n -k3,3n))

# Reorder windows using sketchybar --reorder
sketchybar --reorder "${all_window_items[@]}"
