#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"

handle_click() {
  local item_type=$(echo "$NAME" | cut -d '.' -f 1)
  local space_id=$(echo "$NAME" | cut -d '.' -f 2)
  local window_id=$(echo "$NAME" | cut -d '.' -f 3)

  if [ "$BUTTON" = "left" ]; then
    local current_focused_window=$(yabai_get_focused_window)
    if [ "$current_focused_window" != "$window_id" ]; then
      yabai_focus_window "$window_id"
    fi
  elif [ "$BUTTON" = "right" ]; then
    # redraw the windows
    sketchybar --trigger reset
  fi
}

handle_click
