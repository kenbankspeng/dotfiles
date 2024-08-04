#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"

# toggle setting between autoraise and off
mouse_setting=$(yabai -m config focus_follows_mouse)
if [ "$mouse_setting" == "autoraise" ]; then
  yabai -m config focus_follows_mouse off
  sketchybar -m --set mouse icon.color=$off
else
  yabai -m config focus_follows_mouse autoraise
  sketchybar -m --set mouse icon.color=$on
fi
