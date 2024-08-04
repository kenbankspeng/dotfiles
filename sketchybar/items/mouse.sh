#!/usr/bin/env bash

position=e

props=(
  label.drawing=off
  icon.font="$ICON_FONT:$ICON_FONTSIZE"
  script="$PLUGIN_DIR/mouse.sh"
)

# stack
sketchybar -m --add item mouse $position \
  --set mouse icon=􀇰 ${props[@]} \
  --subscribe mouse mouse.clicked
