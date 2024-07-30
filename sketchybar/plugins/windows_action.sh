#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"

# if [ "$BUTTON" == "left" ]; then
#   if [ "$SELECTED" == "false" ]; then
#     yabai -m space --focus "$index"
#   else
#     if [ "$(space_type "$index")" == "stack" ]; then
#       first_window=$(first_window "$index")
#       last_window=$(last_window "$index")
#       yabai -m window "$first_window" --stack "$last_window"
#     fi
#   fi
# elif [ "$BUTTON" == "right" ]; then
#   toggle_layout "$index"

handle_click() {
  local item_type=$(echo "$NAME" | cut -d '.' -f 1)
  local space_id=$(echo "$NAME" | cut -d '.' -f 2)
  local window_id=$(echo "$NAME" | cut -d '.' -f 3)

  if [ "$BUTTON" = "left" ]; then
    local current_focused_space=$(focused_space)

    if [ "$current_focused_space" != "$space_id" ]; then
      yabai -m space --focus "$space_id"
      yabai -m window --focus "$window_id"
    elif [ "$(space_type "$space_id")" = "stack" ]; then
      first_window=$(first_window "$space_id")
      last_window=$(last_window "$space_id")
      yabai -m window "$first_window" --stack "$last_window"
    fi
  elif [ "$BUTTON" = "right" ]; then
    echo "debug: right"
    #   toggle_layout "$space_id"

  fi
}

handle_click
