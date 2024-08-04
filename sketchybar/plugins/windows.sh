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

highlight_focused_window() {
  local handles=$(sketchy_get_all_window_handles)
  for window_handle in $handles; do
    sketchybar --set "$window_handle" icon.color="$off"
  done

  local window_id=$(yabai_get_focused_window)
  local window_handle=$(sketchybar --query bar | jq -r --arg window_id "$window_id" '.items[] | select(contains($window_id))')
  if [ -n "$window_handle" ]; then
    sketchybar --set "$window_handle" icon.color="$on"
  fi
}

add_section() {
  # start with space
  local space_id="$1"
  sketchy --add item space.$space_id $position
  sketchybar --set space.$space_id width=0

  local props=(
    icon='|'
    icon.color="$off"
    icon.padding_left=0
    icon.padding_right=0
    label.drawing=off
  )
  # end with divider
  sketchy --add item divider.$space_id $position
  sketchybar --set divider.$space_id "${props[@]}"
}

remove_window() {
  local window_id="$1"
  local window_handle=$(sketchybar --query bar | jq -r --arg window_id "$window_id" '.items[] | select(contains($window_id))')
  sketchy --remove "$window_handle"
  highlight_focused_window
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
  highlight_focused_window
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
    highlight_focused_window
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
