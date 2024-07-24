#!/usr/bin/env bash

# The $SELECTED variable is available for space components

source "$CONFIG_DIR/colors.sh" # Loads all defined colors

# space.index: for index 1 to 10, accent is ACCENT($index)
index=$(echo "$NAME" | awk -F. '{print $2}')
accent=$(eval echo \$ACCENT$index)

if [ $SELECTED = true ]; then
  border=$accent
fi

props=(
  # background.color=$bg
  background.border_width=1
  background.border_color=$border
  label.color=$accent
  icon.color=$accent
)
sketchybar --set $NAME "${props[@]}"
