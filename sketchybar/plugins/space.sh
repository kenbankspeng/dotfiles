#!/usr/bin/env bash

# The $SELECTED variable is available for space components

source "$CONFIG_DIR/colors.sh" # Loads all defined colors

if [ $SELECTED = true ]; then
  bg=$ACCENT1
  text=$BAR_COLOR
else
  bg=$BAR_COLOR
  text=$ACCENT1
fi

props=(
  background.color=$bg
  label.color=$text
  icon.color=$text
)
sketchybar --set $NAME "${props[@]}"
