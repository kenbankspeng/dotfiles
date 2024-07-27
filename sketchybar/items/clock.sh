#!/usr/bin/env bash

props=(
  update_freq=1
  icon.drawing=off
  label.color=$MAUVE
  script="$PLUGIN_DIR/clock.sh"
)
sketchybar --add item time right --set time "${props[@]}"
