#!/usr/bin/env bash

# The $SELECTED variable is available for space components and indicates if
# the space invoking this script (with name: $NAME) is currently selected:
# https://felixkratz.github.io/SketchyBar/config/components#space----associate-mission-control-spaces-with-an-item

source "$CONFIG_DIR/colors.sh" # Loads all defined colors

if [ $SELECTED = true ]; then
  bg=$ACCENT_COLOR
  text=$BAR_COLOR
else
  bg=$BAR_COLOR
  text=$ACCENT_COLOR
fi

props=(
  background.color=$bg
  label.color=$text
  icon.color=$text
)
sketchybar --set $NAME "${props[@]}"
