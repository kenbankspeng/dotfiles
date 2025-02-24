#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

# Set the wallpaper every 12 hours
sketchy_add_item wallpaper "$location" \
  --set wallpaper update_freq=43200 \
  script="$PLUGIN_DIR/wallpaper.sh" \
  --subscribe wallpaper mouse.clicked
