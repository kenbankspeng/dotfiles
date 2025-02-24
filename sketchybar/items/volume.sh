#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

props=(
    script="$PLUGIN_DIR/volume.sh"
    icon.color="$LAVENDER"
    icon.align="left"
    icon.width=32
    label.drawing=off
    label.color="$LAVENDER"
  )

sketchy_add_item volume "$location" \
  --set volume "${props[@]}" \
  --subscribe volume volume_change mouse.clicked
