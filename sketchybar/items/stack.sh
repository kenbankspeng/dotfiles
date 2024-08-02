#!/usr/bin/env bash

props=(
  icon.color=$GREY
  script="$PLUGIN_DIR/stack.sh"
)
sketchybar -m --add item normal q \
  --set normal icon=􀆨 ${props[@]} \
  --subscribe yabai mouse.click

sketchybar -m --add item grid q \
  --set grid icon=􀏧 ${props[@]} \
  --subscribe yabai mouse.click

sketchybar -m --add item stack q \
  --set stack icon=􀧈 ${props[@]} \
  --subscribe yabai mouse.click

props=(
  icon.drawing=off
  label.drawing=off
  background.color=off
  script="$PLUGIN_DIR/stack.sh"
)
sketchybar --add event window_changed \
  --add item stack_listener left \
  --set stack_listener "${props[@]}" \
  --subscribe stack_listener window_changed
