#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"

if [ "$SENDER" = "mouse.clicked" ]; then
  if [ "$NAME" = "layout.flatten" ]; then
    aerospace flatten-workspace-tree
  elif [ "$NAME" = "layout.type" ]; then
    aerospace layout tiles accordion
  elif [ "$NAME" = "layout.direction" ]; then
    aerospace layout horizontal vertical
  fi
fi
