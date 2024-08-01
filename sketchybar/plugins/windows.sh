#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"
source "$CONFIG_DIR/plugins/helpers/util.sh"

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

  # get cached data
  local windows_cache_file="$CACHE_DIR/windows_$space_id"
  local dividers_cache_file="$CACHE_DIR/dividers_cache"
  local cached_windows=""
  [[ -f "$windows_cache_file" ]] && cached_windows=$(<"$windows_cache_file")
  local cached_dividers=""
  [[ -f "$dividers_cache_file" ]] && cached_dividers=$(<"$dividers_cache_file")

  # spaces will be added after windows available
  # can add dividers now to use as a marker
  local divider_handle="divider.$space_id"
  if (! grep -q "$divider_handle" <<<"$cached_dividers"); then
    sketchybar --add item "$divider_handle" left \
      --set "$divider_handle" icon.drawing=off label.drawing=off background.padding_left=10 background.padding_right=10
    echo "$divider_handle" >>"$dividers_cache_file"
  fi

  local window_count=$(yabai_get_num_windows_in_space "$space_id")

  # Add new windows and reorder them
  for ((window_index = 0; window_index < window_count; window_index++)); do
    local window_id=$(yabai_get_windows_in_space "$space_id" | jq -r ".[$window_index]")
    local app_name=$(yabai_get_window_app_name "$window_id")
    local icon=$($CONFIG_DIR/icon_map.sh "$app_name")

    local window_handle="window.$space_id.$window_id"
    if (! grep -q "$window_handle" <<<"$cached_windows"); then
      # Add new windows
      sketchybar --add item "$window_handle" left \
        --set "$window_handle" script="$CLICK_HANDLER" \
        --move "$window_handle" before "$divider_handle" \
        --subscribe "$window_handle" mouse.clicked
      echo "$window_handle" >>"$windows_cache_file"
    fi
  done

  # Reorder windows immediately after adding them to minimize flicker
  reorder_windows

  # Get the reordered list of windows for the current space
  local reordered_windows=($(sketchybar --query bar | jq -r ".items[] | select(startswith(\"window.$space_id.\"))"))

  # Check if reordered_windows is not empty
  if [[ ${#reordered_windows[@]} -gt 0 ]]; then
    # Determine the first and last window handles
    local first_window="${reordered_windows[0]}"
    local last_index=$((${#reordered_windows[@]} - 1))
    local last_window="${reordered_windows[$last_index]}"

    # Loop through the reordered windows for styling
    for window_handle in "${reordered_windows[@]}"; do
      # Determine padding for the first and last window in the reordered list
      local padding_left=0
      local padding_right=0

      # Check if the current window_handle is the first or last in the reordered list
      if [[ "$window_handle" == "$first_window" ]]; then
        padding_left=10
      fi
      if [[ "$window_handle" == "$last_window" ]]; then
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
  fi

  # Special case for empty spaces - add placeholder
  if ((window_count == 0)); then
    add_placeholder "$space_id" "$windows_cache_file" "$cached_windows"
  fi

  # Remove closed windows
  local new_cached_windows=$(renew_cache "$space_id" "$window_count" "$windows_cache_file")
  remove_closed_windows "$new_cached_windows" "$cached_windows"

  # Reorder windows to minimize flicker
  reorder_windows
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

  # placeholder for empty spaces
  if ((window_count == 0)); then
    bracket_members=("window.$space_id.0")
  fi

  local existing_bracket_entry=$(grep "^space.$space_id " "$BRACKET_CACHE_FILE")
  if [[ -z "$existing_bracket_entry" ]]; then
    sketchybar --add bracket "space.$space_id" "${bracket_members[@]}"
    echo "space.$space_id ${bracket_members[*]}" >>"$BRACKET_CACHE_FILE"
  elif [[ "$existing_bracket_entry" != "space.$space_id ${bracket_members[*]}" ]]; then
    sketchybar --remove "space.$space_id"
    sketchybar --add bracket "space.$space_id" "${bracket_members[@]}"
    sed -i '' "/^space.$space_id /d" "$BRACKET_CACHE_FILE"
    echo "space.$space_id ${bracket_members[*]}" >>"$BRACKET_CACHE_FILE"
  fi

  local space_props=(
    background.border_color="$(alpha "${ACCENTS[$((space_id - 1))]}" 80)"
    background.border_width=1
    background.corner_radius=8
  )
  sketchybar --set "space.$space_id" "${space_props[@]}"
}

reorder_windows() {

  #
  # FIRST PASS - sort by spaceid groups (space, windows, divider)
  #

  # the sketchybar data to be reordered
  local sketchybar_items_json=$(sketchybar --query bar | jq -r '.items[]')
  local sketchybar_items=($sketchybar_items_json)

  # Extract non-prefixed entities
  local others=$(printf "%s\n" "${sketchybar_items[@]}" | grep -vE '^(space|window|divider)\.')

  # Extract space-related entities
  local spaces=$(printf "%s\n" "${sketchybar_items[@]}" | grep -E '^(space|window|divider)\.')

  # First pass: Sort spaces by spaceid and group them
  local grouped_spaces=()
  for spaceid in $(echo "$spaces" | grep '^space\.' | awk -F. '{print $2}' | sort -n | uniq); do
    grouped_spaces+=($(echo "$spaces" | grep "^space\.$spaceid"))
    grouped_spaces+=($(echo "$spaces" | grep "^window\.$spaceid"))
    grouped_spaces+=($(echo "$spaces" | grep "^divider\.$spaceid"))
  done

  # Output the result of the first pass
  local sorted_list=("$others")
  sorted_list+=("${grouped_spaces[@]}")

  #
  # SECOND PASS - reorder window items within each group
  #               based on yabai query order
  #

  # Second pass: Reorder the window items within each group
  local final_list=()
  local window_batch=()
  local space_index=""

  for item in "${sorted_list[@]}"; do
    if [[ $item == window.* ]]; then
      window_batch+=("$item")
    else
      if [ ${#window_batch[@]} -gt 0 ]; then
        space_index=${window_batch[0]#window.}
        space_index=${space_index%%.*}

        # Get windows for this space from Yabai
        local yabai_windows=$(yabai -m query --windows --space "$space_index" | jq -r '.[].id')
        local yabai_window_ids
        IFS=$'\n' read -rd '' -a yabai_window_ids <<<"$yabai_windows"

        # echo "------ yabai space $space_index ------"
        # echo "${yabai_window_ids[@]}"

        local reordered_windows=()
        for yabai_window_id in "${yabai_window_ids[@]}"; do
          if item_in_array "window.$space_index.$yabai_window_id" "${window_batch[@]}"; then
            reordered_windows+=("window.$space_index.$yabai_window_id")
          fi
        done
        for window_item in "${window_batch[@]}"; do
          if ! item_in_array "$window_item" "${reordered_windows[@]}"; then
            reordered_windows+=("$window_item")
          fi
        done
        final_list+=("${reordered_windows[@]}")
        window_batch=()
      fi
      final_list+=("$item")
    fi
  done

  # Add any remaining window items
  if [ ${#window_batch[@]} -gt 0 ]; then
    final_list+=("${window_batch[@]}")
  fi

  # Print the final sorted list for debugging
  # echo "------ reordered list ------"
  # for item in "${final_list[@]}"; do
  #   echo "$item"
  # done
  # echo

  # Reorder
  if [ ${#final_list[@]} -gt 0 ]; then
    sketchybar --reorder $(printf "%s " "${final_list[@]}")
  fi
}

main() {
  # construct the spaces and windows as per yabai query
  local num_spaces=$(yabai_get_num_spaces)
  for ((space_index = 0; space_index < num_spaces; space_index++)); do
    local space_id=$((space_index + 1)) # Space index starts from 1
    manage_windows "$space_id"
    manage_space "$space_id"
  done
  reorder_windows "$space_id"
}

main
