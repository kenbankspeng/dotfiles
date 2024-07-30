#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

CACHE_DIR="/tmp/sketchybar_window_cache"
mkdir -p "$CACHE_DIR"

get_space_info() {
  yabai -m query --spaces
}

get_window_info() {
  local window_serial_id=$1
  yabai -m query --windows --window "$window_serial_id" | jq -r '.app'
}

get_space_count() {
  echo "$1" | jq '. | length'
}

get_space_object() {
  local spaces_query=$1
  local space_index=$2
  echo "$spaces_query" | jq ".[$space_index]"
}

get_windows_count() {
  local space_info=$1
  echo "$space_info" | jq '.windows | length'
}

get_window_serial_id() {
  local space_info=$1
  local window_id=$2
  echo "$space_info" | jq -r ".windows[$window_id]"
}

cache_windows() {
  local space_id=$1
  local window_count=$2
  local space_info=$3

  local windows_cache_file="$CACHE_DIR/windows_$space_id"
  local cached_windows=""
  [[ -f "$windows_cache_file" ]] && cached_windows=$(<"$windows_cache_file")

  if ((window_count > 0)); then
    for ((window_id = 0; window_id < window_count; window_id++)); do
      local window_serial_id=$(get_window_serial_id "$space_info" "$window_id")
      local app_name=$(get_window_info "$window_serial_id")
      local icon="$($CONFIG_DIR/icon_map.sh "$app_name")"

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

  remove_excess_windows "$windows_cache_file" "$space_id" "$window_count"
}

remove_excess_windows() {
  local windows_cache_file=$1
  local space_id=$2
  local window_count=$3

  local new_cached_windows=""
  if ((window_count > 0)); then
    for ((window_id = 0; window_id < window_count; window_id++)); do
      new_cached_windows+="window.$space_id.$window_id"$'\n'
    done
  else
    new_cached_windows+="window.$space_id.0"$'\n'
  fi
  echo "$new_cached_windows" >"$windows_cache_file"

  local cached_windows_array=()
  IFS=$'\n' read -r -d '' -a cached_windows_array <"$windows_cache_file" || true

  for cached_window in "${cached_windows_array[@]}"; do
    if ! grep -q "$cached_window" <<<"$new_cached_windows"; then
      sketchybar --remove "$cached_window"
    fi
  done

  group_windows "$space_id" "$window_count"
}

group_windows() {
  local space_id=$1
  local window_count=$2

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

  local existing_bracket_entry
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

  sketchybar --set "space$space_id" padding_left=10 padding_right=10 \
    background.border_color=${ACCENTS[$((space_id - 1))]} background.border_width=2 \
    background.corner_radius=4 background.height=30
}

sort_and_reorder_windows() {
  local all_window_items
  all_window_items=($(sketchybar --query bar | jq -r '.items[]' | grep '^window\.' | sort -t '.' -k2,2n -k3,3n))
  sketchybar --reorder "${all_window_items[@]}"
}

main() {
  local spaces_query
  spaces_query=$(get_space_info)
  local num_spaces
  num_spaces=$(get_space_count "$spaces_query")

  for ((space_index = 0; space_index < num_spaces; space_index++)); do
    local space_info
    space_info=$(get_space_object "$spaces_query" "$space_index")
    local space_id
    space_id=$(echo "$space_info" | jq '.index')
    local window_count
    window_count=$(get_windows_count "$space_info")

    cache_windows "$space_id" "$window_count" "$space_info"
  done

  sort_and_reorder_windows
}

main
