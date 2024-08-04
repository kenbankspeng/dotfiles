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

display_windows() {
  local space_id=$1
  local windows=$(yabai_get_windows_in_space $space_id)

  for window_id in $windows; do
    local window_handle="window.$space_id.$window_id"

    # add window
    sketchy --add item "$window_handle" q
    sketchybar --set "$window_handle" script="$CLICK_HANDLER" \
      --subscribe "$window_handle" mouse.clicked

    # style window
    local app_name=$(yabai_get_window_app_name "$window_id")
    local icon=$($CONFIG_DIR/icon_map.sh "$app_name")
    local window_props=(
      label.drawing=off
      icon.font="$ICON_FONT:$ICON_FONTSIZE"
      icon="$icon"
    )
    sketchybar --set "$window_handle" "${window_props[@]}"
  done
}

main() {
  # construct the spaces and windows as per yabai query
  local num_spaces=$(yabai_get_num_spaces)
  for ((space_index = 0; space_index < num_spaces; space_index++)); do
    local space_id=$((space_index + 1)) # Space index starts from 1
    display_windows "$space_id"
  done
}

main
