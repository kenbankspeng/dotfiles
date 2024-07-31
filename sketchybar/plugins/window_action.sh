#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"

handle_click() {
  local item_type=$(echo "$NAME" | cut -d '.' -f 1)
  local space_id=$(echo "$NAME" | cut -d '.' -f 2)
  local window_id=$(echo "$NAME" | cut -d '.' -f 3)

  if [ "$BUTTON" = "left" ]; then
    local current_focused_space=$(yabai_get_focused_space)

    if [ "$current_focused_space" != "$space_id" ]; then
      yabai_focus_space "$space_id"
      yabai_focus_window "$window_id"
    elif [ "$(yabai_get_space_type "$space_id")" = "stack" ]; then
      yabai_rotate_stack "$space_id"
    fi
  elif [ "$BUTTON" = "right" ]; then
    echo "debug: right"
    # Uncomment the line below if you want to toggle layout on right-click
    # yabai_toggle_layout "$space_id"
  fi
}

handle_click
