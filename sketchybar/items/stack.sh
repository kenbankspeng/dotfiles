#!/usr/bin/env bash

position=e

props=(
  icon.drawing=off
  label.drawing=off
  padding_left=20
  background.color=off
  script="$PLUGIN_DIR/stack.sh"
)
sketchybar --add event space_changed \
  --add item stack_listener $position \
  --set stack_listener "${props[@]}" \
  --subscribe stack_listener space_changed

props=(
  label.drawing=off
  icon.font="$ICON_FONT:$ICON_FONTSIZE"
  icon.color=$GREY
  script="$PLUGIN_DIR/stack.sh"
)

# float = normal
sketchybar -m --add item float $position \
  --set float icon=􀆨 ${props[@]} \
  --subscribe float mouse.clicked

# bsp = grid
sketchybar -m --add item bsp $position \
  --set bsp icon=􀏝 ${props[@]} \
  --subscribe bsp mouse.clicked

# stack
sketchybar -m --add item stack $position \
  --set stack icon=􀏧 ${props[@]} \
  --subscribe stack mouse.clicked
