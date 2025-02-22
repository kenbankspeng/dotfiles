#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

props=(
  icon.drawing=off
  label.drawing=on
  label.color="$MAUVE"
  label.padding_left=5
  label.padding_right=40
  update_freq=1
  script="$PLUGIN_DIR/clock.sh"
)
sketchy_add_item time right --set time "${props[@]}" \
  --subscribe time mouse.clicked
