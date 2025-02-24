#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

props=(
  script="$PLUGIN_DIR/clock.sh"
  update_freq=1
  icon.drawing=off
  label.drawing=on
  label.color="$MAUVE"
  label.padding_left=5
  label.padding_right=40
)
sketchy_add_item time "$location" \
  --set time "${props[@]}" \
  --subscribe time mouse.clicked
