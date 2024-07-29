#!/usr/bin/env bash

sketchybar --add event window_changed \
  --add item windows left \
  --set windows script="$PLUGIN_DIR/windows.sh" \
  --subscribe windows window_changed

# sketchybar --add bracket spaces '/window\..*/' \
#   --set spaces background.color=red
