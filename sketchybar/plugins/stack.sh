#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"

update() {
  off=$GREY
  on=$YELLOW

  type=$(yabai_get_focused_space_type)

  case "$type" in
  "float")
    normal_color=$on
    bsp_color=$off
    stack_color=$off
    ;;
  "bsp")
    float_color=$off
    bsp_color=$on
    stack_color=$off
    ;;
  "stack")
    float_color=$off
    bsp_color=$off
    stack_color=$on
    ;;
  *)
    float_color=$off
    bsp_color=$off
    stack_color=$off
    ;;
  esac

  sketchybar -m --set float icon.color=$float_color
  sketchybar -m --set bsp icon.color=$bsp_color
  sketchybar -m --set stack icon.color=$stack_color
}

if [ "$BUTTON" == "left" ]; then
  yabai -m space --layout "$NAME"
  #elif [ "$BUTTON" == "right" ]; then
fi

update

# if [ "$SELECTED" == "false" ]; then
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
