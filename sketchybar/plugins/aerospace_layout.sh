#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"

if [ "$SENDER" = "mouse.clicked" ]; then
  if [ "$NAME" = "layout.flatten" ]; then
    aerospace_flatten
  elif [ "$NAME" = "layout.type" ]; then
    aerospace_layout
  elif [ "$NAME" = "layout.direction" ]; then
    aerospace_direction
  fi
fi
