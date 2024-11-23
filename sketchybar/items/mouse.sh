#!/usr/bin/env bash

props=(
  label.drawing=off
  script="$PLUGIN_DIR/mouse.sh"
)

# stack
sketchybar -m --add item mouse left \
  --set mouse icon=􀇰 ${props[@]} \
  --subscribe mouse mouse.clicked
