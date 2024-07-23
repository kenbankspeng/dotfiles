#!/usr/bin/env bash

# The $SELECTED variable is available for space components

source "$CONFIG_DIR/colors.sh" # Loads all defined colors

# space.index: for index 1 to 10, accent is ACCENT($index)
index=$(echo "$NAME" | awk -F. '{print $2}')
accent=$(eval echo \$ACCENT$index)

if [ $SELECTED = true ]; then
  bg=$accent
  text=$BAR_COLOR
else
  bg=$BAR_COLOR
  text=$accent
fi

props=(
  background.color=$bg
  label.color=$text
  icon.color=$text
)
sketchybar --set $NAME "${props[@]}"
