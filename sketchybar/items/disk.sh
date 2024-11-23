#!/usr/bin/env bash

props=(
  icon=􀥾
  icon.color=$SAPPHIRE
  update_freq=5
  script="$PLUGIN_DIR/disk.sh"
)

sketchybar --add item disk left \
  --set disk "${props[@]}"
