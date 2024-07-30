#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

CACHE_DIR="/tmp/sketchybar_window_cache"
BRACKET_CACHE_FILE="$CACHE_DIR/space_bracket_cache"
SPACES_QUERY=$(yabai -m query --spaces)
NUM_SPACES=$(echo "$SPACES_QUERY" | jq '. | length')

mkdir -p "$CACHE_DIR"
touch "$BRACKET_CACHE_FILE"

# Helper to modify alpha of a 0xaarrggbb color
alpha() {
  local color=$1
  local new_alpha=$2
  local rgb_part=${color:4}
  echo 0x${new_alpha}${rgb_part} # new color
}

renew_cache() {
  local space_id="$1"
  local window_count="$2"
  local windows_cache_file="$3"

  local new_cached_windows=""
  for ((window_id = 0; window_id < window_count; window_id++)); do
    new_cached_windows+="window.$space_id.$window_id"$'\n'
  done

  if ((window_count == 0)); then
    new_cached_windows+="window.$space_id.0"$'\n'
  fi

  echo "$new_cached_windows" >"$windows_cache_file"
  echo "$new_cached_windows"
}

# Determine closed windows by comparing new cache to prev cache
remove_closed_windows() {
  local new_cached_windows="$1"
  local cached_windows="$2"

  IFS=$'\n' read -r -d '' -a cached_windows_array <<<"$cached_windows"
  for cached_window in "${cached_windows_array[@]}"; do
    if ! grep -q "$cached_window" <<<"$new_cached_windows"; then
      sketchybar --remove "$cached_window"
    fi
  done
}

# As needed, add new windows, update existing, remove closed
manage_windows() {
  local space_info="$1"
  local space_id="$2"
  local window_count="$3"
  local cached_windows="$4"
  local windows_cache_file="$5"

  for ((window_id = 0; window_id < window_count; window_id++)); do
    local window_serial_id=$(echo "$space_info" | jq -r ".windows[$window_id]")
    local app_name=$(yabai -m query --windows --window "$window_serial_id" | jq -r '.app')
    local icon=$($CONFIG_DIR/icon_map.sh "$app_name")

    # Add new windows
    local window_handle="window.$space_id.$window_id"
    if ! grep -q "$window_handle" <<<"$cached_windows"; then
      sketchybar --add item "$window_handle" left
      echo "$window_handle" >>"$windows_cache_file"
    fi

    # Update new and existing windows
    local padding_left=0
    local padding_right=0
    # Set padding for the first and last window in each space group
    if ((window_id == 0)); then
      padding_left=10
    fi
    if ((window_id == window_count - 1)); then
      padding_right=10
    fi

    local window_props=(
      background.padding_left=$padding_left
      background.padding_right=$padding_right
      label.drawing=off
      icon.padding_left=2
      icon.padding_right=2
      icon.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE"
      icon="$icon"
    )
    sketchybar --set "$window_handle" "${window_props[@]}"
  done

  # Special case for empty spaces - add placeholder
  if ((window_count == 0)); then
    local window_handle="window.$space_id.0"
    if ! grep -q "$window_handle" <<<"$cached_windows"; then
      sketchybar --add item "$window_handle" left
      echo "$window_handle" >>"$windows_cache_file"
    fi

    local window_props=(
      label.drawing=off
      icon.drawing=on
      icon='–'
      icon.padding_left=6
      icon.padding_right=6
    )
    sketchybar --set "$window_handle" "${window_props[@]}"
  fi

  # Remove closed windows
  local new_cached_windows=$(renew_cache "$space_id" "$window_count" "$windows_cache_file")
  remove_closed_windows "$new_cached_windows" "$cached_windows"
}

# Function to create a divider item
create_divider() {
  local divider_handle="$1"
  if ! grep -q "$divider_handle" "$BRACKET_CACHE_FILE"; then
    # Add the divider item to the bar
    local divider_props=(
      icon.drawing=off
      label.drawing=off
      background.padding_left=10
      background.padding_right=10
    )
    sketchybar --add item "$divider_handle" left
    sketchybar --set "$divider_handle" "${divider_props[@]}"
    echo "$divider_handle" >>"$BRACKET_CACHE_FILE"
  fi
}

# Use brackets to group windows in the same space
manage_space() {
  local space_id="$1"
  local window_count="$2"

  local bracket_members=()
  for ((window_id = 0; window_id < window_count; window_id++)); do
    bracket_members+=("window.$space_id.$window_id")
  done

  if ((window_count == 0)); then
    bracket_members=("window.$space_id.0")
  fi

  local existing_bracket_entry=$(grep "^space$space_id " "$BRACKET_CACHE_FILE")
  if [[ -z "$existing_bracket_entry" ]]; then
    sketchybar --add bracket "space$space_id" "${bracket_members[@]}"
    echo "space$space_id ${bracket_members[*]}" >>"$BRACKET_CACHE_FILE"
  elif [[ "$existing_bracket_entry" != "space$space_id ${bracket_members[*]}" ]]; then
    sketchybar --remove "space$space_id"
    sketchybar --add bracket "space$space_id" "${bracket_members[@]}"
    sed -i '' "/^space$space_id /d" "$BRACKET_CACHE_FILE"
    echo "space$space_id ${bracket_members[*]}" >>"$BRACKET_CACHE_FILE"
  fi

  local space_props=(
    background.border_color=$(alpha "${ACCENTS[$((space_id - 1))]}" 80)
    background.border_width=1
    background.corner_radius=8
  )
  sketchybar --set "space$space_id" "${space_props[@]}"
}

# Ensure dividers are created between all spaces
manage_dividers() {
  local all_dividers=""
  for ((space_id = 1; space_id < NUM_SPACES; space_id++)); do
    local divider_handle="divider.$space_id"
    create_divider "$divider_handle"
    all_dividers+=" $divider_handle"
  done
  echo "$all_dividers" >"$CACHE_DIR/dividers_cache"
}

# Reorder windows and dividers
reorder_windows() {
  local all_window_items=($(sketchybar --query bar | jq -r '.items[]' | grep -E '^(window|divider)\.' | sort -t '.' -k2,2n -k3,3n))
  local reordered_items=()
  local previous_space_id=0

  for item in "${all_window_items[@]}"; do
    if [[ $item =~ ^window\.([0-9]+)\. ]]; then
      local current_space_id=${BASH_REMATCH[1]}
      if ((previous_space_id != 0 && previous_space_id != current_space_id)); then
        local divider_handle="divider.$previous_space_id"
        reordered_items+=("$divider_handle")
      fi
      reordered_items+=("$item")
      previous_space_id=$current_space_id
    fi
  done

  # Add the last divider if needed
  if ((previous_space_id != 0 && previous_space_id != NUM_SPACES)); then
    local divider_handle="divider.$previous_space_id"
    reordered_items+=("$divider_handle")
  fi

  sketchybar --reorder "${reordered_items[@]}"
}

main() {
  for ((space_index = 0; space_index < NUM_SPACES; space_index++)); do
    # get data from json
    local space_info=$(echo "$SPACES_QUERY" | jq ".[$space_index]")
    local space_id=$(echo "$space_info" | jq '.index')
    local window_count=$(echo "$space_info" | jq '.windows | length')

    # get cached data
    local windows_cache_file="$CACHE_DIR/windows_$space_id"
    local cached_windows=""
    [[ -f "$windows_cache_file" ]] && cached_windows=$(<"$windows_cache_file")

    # construct the spaces and windows
    manage_windows "$space_info" "$space_id" "$window_count" "$cached_windows" "$windows_cache_file"
    manage_space "$space_id" "$window_count"
  done

  manage_dividers
  reorder_windows
}

main
