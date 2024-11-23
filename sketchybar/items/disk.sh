#!/usr/bin/env bash

props=(
  icon=􀥾
  icon.color=$SAPPHIRE
  background.height=$ITEM_HEIGHT_WITH_LABEL
  update_freq=5
  script="$PLUGIN_DIR/disk.sh"
)

sketchybar --add item disk left \
  --set disk "${props[@]}"
