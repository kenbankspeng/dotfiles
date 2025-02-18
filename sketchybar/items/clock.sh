#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

props=(
  label.color="$MAUVE"
  icon.font="$FONT:$FONTSIZE"
  label.font="$FONT:$((FONTSIZE - 1))"
  update_freq=1
  script="$PLUGIN_DIR/clock.sh"
)
sketchy_add_item time right --set time "${props[@]}" \
  --subscribe time mouse.clicked
  