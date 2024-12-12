#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

props=(
  icon=$ICON_DISK
  icon.color=$SAPPHIRE
  background.height=$ITEM_HEIGHT_WITH_LABEL
  update_freq=5
  script="$PLUGIN_DIR/disk.sh"
)

sketchy_add_item disk right \
  --set disk "${props[@]}" \
  --subscribe disk mouse.clicked
