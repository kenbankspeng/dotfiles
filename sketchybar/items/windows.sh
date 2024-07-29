#!/usr/bin/env bash

# Remove the cache directory and its contents
rm -rf "$CACHE_DIR"

sketchybar --add event window_changed \
  --add item windows left \
  --set windows script="$PLUGIN_DIR/windows.sh" \
  --subscribe windows window_changed

# sketchybar --add bracket spaces '/window\..*/' \
#   --set spaces background.color=red
