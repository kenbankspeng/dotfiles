#!/usr/bin/env bash

# this cache is cleared on every startup so windows get created
rm -rf "$CACHE_DIR"

sketchybar --add event window_changed \
  --add item windows left \
  --set windows script="$PLUGIN_DIR/windows.sh" \
  --subscribe windows window_changed

# sketchybar --add bracket spaces '/window\..*/' \
#   --set spaces background.color=red
