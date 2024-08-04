#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"
source "$CONFIG_DIR/plugins/helpers/sketchy.sh"

position=left

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

focus_changed() {
  local window_id="$1"
  local window_handle=$(sketchybar --query bar | jq -r --arg window_id "$window_id" '.items[] | select(contains($window_id))')
  local windows=$(sketchy_get_all_windows)
  for window in $windows; do
    sketchybar --set "$window" icon.color="$off"
  done
  sketchybar --set "$window_handle" icon.color="$on"
}

add_section() {
  local space_id="$1"
  local props=(
    width=0
    icon.drawing=off
    label.drawing=off
  )
  sketchy --add item space.$space_id $position
  sketchybar --set space.$space_id "${props[@]}"
  sketchy --add item divider.$space_id $position
  sketchybar --set divider.$space_id "${props[@]}"
}

remove_window() {
  local window_id="$1"
  local window_handle=$(sketchybar --query bar | jq -r --arg window_id "$window_id" '.items[] | select(contains($window_id))')
  sketchy --remove "$window_handle"
}

add_window() {
  local space_id="$1"
  local window_id="$2"
  if [ "$space_id" == "unknown" ]; then
    space_id=$(yabai_get_window_space "$window_id")
  fi

  add_section "$space_id"

  # add window
  local window_handle="window.$space_id.$window_id"
  sketchy --add item "$window_handle" $position
  sketchybar --move "$window_handle" before divider.$space_id
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
}

main() {
  if [ "$SENDER" = "focus_changed" ]; then
    focus_changed "$ID"
  elif [ "$SENDER" = "window_created" ]; then
    add_window "unknown" "$ID"
  elif [ "$SENDER" = "window_destroyed" ]; then
    remove_window "$ID"
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
