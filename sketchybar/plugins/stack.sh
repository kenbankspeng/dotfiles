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
    grid_color=$off
    stack_color=$off
    ;;
  "bsp")
    normal_color=$off
    grid_color=$on
    stack_color=$off
    ;;
  "stack")
    normal_color=$off
    grid_color=$off
    stack_color=$on
    ;;
  *)
    normal_color=$off
    grid_color=$off
    stack_color=$off
    ;;
  esac

  sketchybar -m --set normal icon.color=$normal_color
  sketchybar -m --set grid icon.color=$grid_color
  sketchybar -m --set stack icon.color=$stack_color
}

case $NAME in
normal)
  update
  ;;
grid)
  update
  ;;
stack)
  update
  ;;
*) ;;
esac
