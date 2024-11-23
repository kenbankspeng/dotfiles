#!/usr/bin/env bash

props=(
  background.height=$ITEM_HEIGHT_WITH_LABEL
  label.color=$MAUVE
  icon.font="$FONT:$FONTSIZE"
  label.font="$FONT:$((FONTSIZE - 1))"
  update_freq=1
  script="$PLUGIN_DIR/clock.sh"
)
sketchybar --add item time right --set time "${props[@]}"
