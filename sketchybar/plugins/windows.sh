#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

CACHE_DIR="/tmp/sketchybar_window_cache"
mkdir -p "$CACHE_DIR"

set_space_properties() {
  local space_id="$1"
  sketchybar --set "space$space_id" padding_left=10 padding_right=10 \
    background.border_color=${ACCENTS[$((space_id - 1))]} background.border_width=2 \
    background.corner_radius=4 background.height=30
}

update_cache_and_remove_excess() {
  local space_id="$1" window_count="$2" cached_windows="$3" windows_cache_file="$4"

  local new_cached_windows=""
  if ((window_count > 0)); then
    for ((window_id = 0; window_id < window_count; window_id++)); do
      new_cached_windows+="window.$space_id.$window_id"$'\n'
    done
  else
    new_cached_windows+="window.$space_id.0"$'\n'
  fi
  echo "$new_cached_windows" >"$windows_cache_file"

  IFS=$'\n' read -r -d '' -a cached_windows_array <<<"$cached_windows"
  for cached_window in "${cached_windows_array[@]}"; do
    if ! grep -q "$cached_window" <<<"$new_cached_windows"; then
      sketchybar --remove "$cached_window"
    fi
  done
}

manage_windows() {
  local space_info="$1" space_id="$2" window_count="$3" cached_windows="$4" windows_cache_file="$5"

  if ((window_count > 0)); then
    for ((window_id = 0; window_id < window_count; window_id++)); do
      local window_serial_id=$(echo "$space_info" | jq -r ".windows[$window_id]")
      local app_name=$(yabai -m query --windows --window "$window_serial_id" | jq -r '.app')
      local icon
      icon="$($CONFIG_DIR/icon_map.sh "$app_name")"

      local window_handle="window.$space_id.$window_id"
      if ! grep -q "$window_handle" <<<"$cached_windows"; then
        sketchybar --add item "$window_handle" left
        echo "$window_handle" >>"$windows_cache_file"
      fi

      sketchybar --set "$window_handle" label.drawing=off icon.drawing=off \
        padding_left=5 padding_right=5 icon.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE" \
        icon.padding_left=2 icon.padding_right=2 icon.drawing=on icon="$icon"
    done
  else
    local window_handle="window.$space_id.0"
    if ! grep -q "$window_handle" <<<"$cached_windows"; then
      sketchybar --add item "$window_handle" left
      echo "$window_handle" >>"$windows_cache_file"
    fi
    sketchybar --set "$window_handle" label.drawing=on label='-' \
      padding_left=5 padding_right=5 icon.drawing=off
  fi

  update_cache_and_remove_excess "$space_id" "$window_count" "$cached_windows" "$windows_cache_file"
}

manage_brackets() {
  local space_id="$1" window_count="$2" space_info="$3"

  local bracket_cache_file="$CACHE_DIR/space_bracket_cache"
  touch "$bracket_cache_file"

  local bracket_members=()
  if ((window_count == 0)); then
    bracket_members=("window.$space_id.0")
  else
    for ((window_id = 0; window_id < window_count; window_id++)); do
      bracket_members+=("window.$space_id.$window_id")
    done
  fi

  local existing_bracket_entry=$(grep "^space$space_id " "$bracket_cache_file")
  if [[ -z "$existing_bracket_entry" ]]; then
    sketchybar --add bracket "space$space_id" "${bracket_members[@]}"
    echo "space$space_id ${bracket_members[*]}" >>"$bracket_cache_file"
  elif [[ "$existing_bracket_entry" != "space$space_id ${bracket_members[*]}" ]]; then
    sketchybar --remove "space$space_id"
    sketchybar --add bracket "space$space_id" "${bracket_members[@]}"
    sed -i '' "/^space$space_id /d" "$bracket_cache_file"
    echo "space$space_id ${bracket_members[*]}" >>"$bracket_cache_file"
  fi
}

process_space() {
  local space_info="$1"

  local space_id=$(echo "$space_info" | jq '.index')
  local window_count=$(echo "$space_info" | jq '.windows | length')
  local windows_cache_file="$CACHE_DIR/windows_$space_id"
  local cached_windows=""
  [[ -f "$windows_cache_file" ]] && cached_windows=$(<"$windows_cache_file")

  manage_windows "$space_info" "$space_id" "$window_count" "$cached_windows" "$windows_cache_file"
  manage_brackets "$space_id" "$window_count" "$space_info"
  set_space_properties "$space_id"
}

reorder_windows() {
  local all_window_items=($(sketchybar --query bar | jq -r '.items[]' | grep '^window\.' | sort -t '.' -k2,2n -k3,3n))
  sketchybar --reorder "${all_window_items[@]}"
}

main() {
  local spaces_query=$(yabai -m query --spaces)
  local num_spaces=$(echo "$spaces_query" | jq '. | length')

  for ((space_index = 0; space_index < num_spaces; space_index++)); do
    local space_info=$(echo "$spaces_query" | jq ".[$space_index]")
    process_space "$space_info"
  done

  reorder_windows
}

main
