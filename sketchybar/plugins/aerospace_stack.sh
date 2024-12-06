#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"

if [ "$NAME" = "grid" ]; then
  # grid
  sketchybar --set grid icon.color=$ON
fi

if [ "$NAME" = "stack" ]; then
  sketchybar --set stack icon.color=$ON
fi
