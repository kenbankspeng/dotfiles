#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"

aerospace_stack() {

}

if [ "$NAME" = "grid" ]; then
  # grid
  sketchybar --set grid icon.color=$ON
fi

if [ "$NAME" = "stack" ]; then
  sketchybar --set stack icon.color=$ON
fi
