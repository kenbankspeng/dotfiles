#!/usr/bin/env bash

props=(
  label.drawing=off
  icon.drawing=off
  background.drawing=off
  script="$PLUGIN_DIR/space.sh"
)
sketchybar --add event window_changed \
  --add item win_listener left \
  --set win_listener "${props[@]}" \
  --subscribe win_listener window_changed
