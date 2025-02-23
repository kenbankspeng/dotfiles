#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

props=(
	icon.drawing=on
  icon="$ICON_CPU"
  icon.color="$SAPPHIRE"
  icon.font="$FONT:$((ICON_FONTSIZE+4))"
  label.drawing=on
  background.padding_left=0
  background.padding_right=0
  icon.padding_left=0
  icon.padding_right=0
  label.padding_left=10
  label.padding_right=0
  label.width=36
  label.align=center
  update_freq=5
  script="$PLUGIN_DIR/disk.sh"
)

sketchy_add_item disk "$location" \
  --set disk "${props[@]}" \
  --subscribe disk mouse.clicked
