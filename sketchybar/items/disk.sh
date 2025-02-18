#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

props=(
  label.drawing=on
	icon.drawing=on
  icon="$ICON_DISK"
  icon.color="$SAPPHIRE"
  icon.font="$FONT:$((ICON_FONTSIZE - 4))"
  update_freq=5
  script="$PLUGIN_DIR/disk.sh"
)

sketchy_add_item disk right \
  --set disk "${props[@]}" \
  --subscribe disk mouse.clicked
