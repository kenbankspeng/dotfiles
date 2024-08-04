#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"
source "$CONFIG_DIR/plugins/helpers/sketchy.sh"

CLICK_HANDLER="$CONFIG_DIR/plugins/window_action.sh"
BRACKET_CACHE_FILE="$CACHE_DIR/space_bracket_cache"
LOG_DIR="$CACHE_DIR/logs"
LOG_FILE="$LOG_DIR/windows.log"

mkdir -p "$LOG_DIR"
touch "$BRACKET_CACHE_FILE"
touch "$LOG_FILE"

# Helper to modify alpha of a 0xaarrggbb color
alpha() {
  local color=$1
  local new_alpha=$2
  local rgb_part=${color:4}
  echo 0x${new_alpha}${rgb_part} # new color
}

# sort by spaceid groups (space, windows, divider)
reorder_windows() {

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

  # Add any remaining window items
  if [ ${#window_batch[@]} -gt 0 ]; then
    sorted_list+=("${window_batch[@]}")
  fi

  # Print the final sorted list for debugging
  # echo "------ reordered list ------"
  # for item in "${sorted_list[@]}"; do
  #   echo "$item"
  # done
  # echo

  # Reorder
  if [ ${#sorted_list[@]} -gt 0 ]; then
    sketchybar --reorder $(printf "%s " "${sorted_list[@]}")
  fi
}

remove_window() {
  local space_id="$1"
  local window_id="$2"
  if [ "$space_id" == "unknown" ]; then
    space_id=$(yabai_get_window_space "$window_id")
  fi
  local window_handle="window.$space_id.$window_id"
  sketchybar --remove "$window_handle"
}

add_window() {
  local space_id="$1"
  local window_id="$2"
  if [ "$space_id" == "unknown" ]; then
    space_id=$(yabai_get_window_space "$window_id")
  fi

  local window_handle="window.$space_id.$window_id"

  # add window
  sketchy --add item "$window_handle" q
  sketchybar --set "$window_handle" script="$CLICK_HANDLER" \
    --subscribe "$window_handle" mouse.clicked

  # style window
  local color=$off
  if [ "$window_id" == "$focused_window" ]; then color=$on; fi
  local app_name=$(yabai_get_window_app_name "$window_id")
  local icon=$($CONFIG_DIR/icon_map.sh "$app_name")
  local window_props=(
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
    icon="$icon"
    icon.color="$color"
  )
  sketchybar --set "$window_handle" "${window_props[@]}"
}

add_windows_for_space() {
  local space_id=$1
  local windows=$(yabai_get_windows_in_space $space_id)
  local focused_window=$(yabai_get_focused_window)

  for window_id in $windows; do
    add_window "$space_id" "$window_id"
  done

  reorder_windows
}

main() {
  if [ "$SENDER" = "space_changed" ]; then
    echo "space changed"
  elif [ "$SENDER" = "window_created" ]; then
    add_window "unknown" "$ID"
  elif [ "$SENDER" = "window_destroyed" ]; then
    remove_window "unknown" "$ID"
  else
    # construct the spaces and windows as per yabai query
    local num_spaces=$(yabai_get_num_spaces)
    for ((space_index = 0; space_index < num_spaces; space_index++)); do
      local space_id=$((space_index + 1)) # Space index starts from 1
      add_windows_for_space "$space_id"
    done
  fi
}

main
