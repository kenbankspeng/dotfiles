#!/usr/bin/env zsh

props=(
  icon=$DISK
  icon.color=$SAPPHIRE
  background.height=$ITEM_HEIGHT_WITH_LABEL
  update_freq=5
  script="$PLUGIN_DIR/disk.sh"
)

sketchybar --add item disk right \
  --set disk "${props[@]}" \
  --subscribe disk mouse.clicked
