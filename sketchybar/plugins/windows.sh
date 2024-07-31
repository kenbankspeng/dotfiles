#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"

CACHE_DIR="/tmp/sketchybar_window_cache"
BRACKET_CACHE_FILE="$CACHE_DIR/space_bracket_cache"
CLICK_HANDLER="$CONFIG_DIR/plugins/window_action.sh"

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
  for ((window_index = 0; window_index < window_count; window_index++)); do
    local window_id=$(yabai_get_windows_in_space "$space_id" | jq -r ".[$window_index]")
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

  while IFS= read -r cached_window; do
    if ! grep -q "$cached_window" <<<"$new_cached_windows"; then
      sketchybar --remove "$cached_window"
    fi
  done <<<"$cached_windows"
}

# Add placeholder for empty spaces
add_placeholder() {
  local space_id="$1"
  local windows_cache_file="$2"
  local cached_windows="$3"
  local placeholder="window.$space_id.0"

  if (! grep -q "$placeholder" <<<"$cached_windows"); then
    sketchybar --add item "$placeholder" left
    sketchybar --set "$placeholder" script="$CLICK_HANDLER" \
      --subscribe "$placeholder" mouse.clicked
    echo "$placeholder" >>"$windows_cache_file"
  fi

  local window_props=(
    label.drawing=off
    icon.drawing=on
    icon="–" # Unified placeholder value
    icon.padding_left=6
    icon.padding_right=6
  )
  sketchybar --set "$placeholder" "${window_props[@]}"
}

# As needed, add new windows, update existing, remove closed
manage_windows() {
  local space_id="$1"
  local window_count=$(yabai_get_num_windows_in_space "$space_id")
  local cached_windows="$2"
  local windows_cache_file="$3"
  local dividers_cache_file="$CACHE_DIR/dividers_cache"
  local cached_dividers=""
  [[ -f "$dividers_cache_file" ]] && cached_dividers=$(<"$dividers_cache_file")

  # Add a divider before the first window in any space except space 1
  if ((space_id > 1)); then
    local divider_handle="divider.$space_id"
    if (! grep -q "$divider_handle" <<<"$cached_dividers"); then
      sketchybar --add item "$divider_handle" left
      sketchybar --set "$divider_handle" icon.drawing=off label.drawing=off background.padding_left=10 background.padding_right=10
      echo "$divider_handle" >>"$dividers_cache_file"
    fi
  fi

  for ((window_index = 0; window_index < window_count; window_index++)); do
    local window_id=$(yabai_get_windows_in_space "$space_id" | jq -r ".[$window_index]")
    local app_name=$(yabai_get_window_app_name "$window_id")
    local icon=$($CONFIG_DIR/icon_map.sh "$app_name")

    # Add new windows
    local window_handle="window.$space_id.$window_id"
    if (! grep -q "$window_handle" <<<"$cached_windows"); then
      sketchybar --add item "$window_handle" left
      sketchybar --set "$window_handle" script="$CLICK_HANDLER" \
        --subscribe "$window_handle" mouse.clicked
      echo "$window_handle" >>"$windows_cache_file"
    fi

    # Determine padding for the first and last window in the space
    local padding_left=0
    local padding_right=0
    if ((window_index == 0)); then
      padding_left=10
    fi
    if ((window_index == window_count - 1)); then
      padding_right=10
    fi

    # Update window properties
    local window_props=(
      background.padding_left="$padding_left"
      background.padding_right="$padding_right"
      label.drawing=off
      icon.padding_left=2
      icon.padding_right=2
      icon.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE"
      icon="$icon"
    )
    sketchybar --set "$window_handle" "${window_props[@]}"
  done

  # Reorder windows and dividers immediately after adding them
  reorder_windows

  # Special case for empty spaces - add placeholder
  if ((window_count == 0)); then
    add_placeholder "$space_id" "$windows_cache_file" "$cached_windows"
  fi

  # Remove closed windows
  local new_cached_windows=$(renew_cache "$space_id" "$window_count" "$windows_cache_file")
  remove_closed_windows "$new_cached_windows" "$cached_windows"
}

# Use brackets to group windows in the same space
manage_space() {
  local space_id="$1"
  local window_count=$(yabai_get_num_windows_in_space "$space_id")

  local bracket_members=()
  for ((window_index = 0; window_index < window_count; window_index++)); do
    local window_id=$(yabai_get_windows_in_space "$space_id" | jq -r ".[$window_index]")
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
    background.border_color="$(alpha "${ACCENTS[$((space_id - 1))]}" 80)"
    background.border_width=1
    background.corner_radius=8
  )
  sketchybar --set "space$space_id" "${space_props[@]}"
}

# Reorder windows and dividers
reorder_windows() {
  # Fetch JSON data from yabai and sketchybar
  yabai_spaces_json=$(yabai -m query --spaces)
  sketchybar_items_json=$(sketchybar --query bar | jq -r '.items')

  # Debug: print the fetched JSON data
  echo "Yabai Spaces JSON:"
  echo "$yabai_spaces_json"
  echo
  echo "Sketchybar Items JSON:"
  echo "$sketchybar_items_json"
  echo

  # Parse the JSON data
  yabai_spaces=$(echo "$yabai_spaces_json" | jq -c '.[]')
  sketchybar_items=$(echo "$sketchybar_items_json" | jq -r '.[]')

  # Debug: print parsed items
  echo "Parsed Yabai Spaces:"
  echo "$yabai_spaces"
  echo
  echo "Parsed Sketchybar Items:"
  echo "$sketchybar_items"
  echo

  # If sketchybar items are empty, log and return
  if [ -z "$sketchybar_items" ]; then
    echo "No Sketchybar items found."
    return
  fi

  # Extract windows from sketchybar items
  sketchybar_windows=$(echo "$sketchybar_items" | grep -Eo 'window\.[0-9]+\.[0-9]+')

  # Debug: print extracted sketchybar windows
  echo "Extracted Sketchybar Windows:"
  echo "$sketchybar_windows"
  echo

  # Create the sorted list based on yabai order
  sorted_list=()

  for space in $yabai_spaces; do
    space_id=$(echo "$space" | jq -r '.id')
    windows=$(echo "$space" | jq -r '.windows[]?')

    # Debug: print the current space details
    echo "Processing Space ID: $space_id"
    echo "Windows in this space:"
    echo "$windows"
    echo

    if [ -n "$windows" ]; then
      for window_id in $windows; do
        # Correctly format the window item to match Sketchybar format
        window_item="window.$space_id.$window_id"

        # Check if this window item exists in the Sketchybar windows
        if echo "$sketchybar_windows" | grep -q "$window_item"; then
          sorted_list+=("$window_item")
        fi
      done
    fi
  done

  # Debug: print the sorted list
  echo "Sorted List:"
  printf "%s\n" "${sorted_list[@]}"
}

main() {
  local num_spaces=$(yabai_get_num_spaces)
  for ((space_index = 0; space_index < num_spaces; space_index++)); do
    local space_id=$((space_index + 1)) # Space index starts from 1

    # get cached data
    local windows_cache_file="$CACHE_DIR/windows_$space_id"
    local cached_windows=""
    [[ -f "$windows_cache_file" ]] && cached_windows=$(<"$windows_cache_file")

    # construct the spaces and windows
    manage_windows "$space_id" "$cached_windows" "$windows_cache_file"
    manage_space "$space_id"
  done

  reorder_windows
}

main
