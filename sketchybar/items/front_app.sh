#!/bin/bash

props=(
  background.color=$ACCENT_COLOR
  icon.padding_left=0
  icon.padding_right=0
  label.color=$BAR_COLOR
  script="$PLUGIN_DIR/front_app.sh"
)
sketchybar --add item front_app left --set front_app "${props[@]}" --subscribe front_app front_app_switched
