#!/usr/bin/env bash

props=(
  icon.color=$GREY
  script="$PLUGIN_DIR/stack.sh"
)
# float = normal
sketchybar -m --add item float q \
  --set float icon=􀆨 ${props[@]} \
  --subscribe float mouse.click

# bsp = grid
sketchybar -m --add item bsp q \
  --set bsp icon=􀏧 ${props[@]} \
  --subscribe bsp mouse.click

# stack
sketchybar -m --add item stack q \
  --set stack icon=􀧈 ${props[@]} \
  --subscribe stack mouse.click

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
