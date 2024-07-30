#!/usr/bin/env bash

# this cache is cleared on every startup so windows get created
rm -rf "$CACHE_DIR"

windows_props=(
  label.drawing=off
  icon.drawing=off
  background.drawing=off
  script="$PLUGIN_DIR/windows.sh"
)
sketchybar --add event window_changed \
  --add item windows left \
  --set windows "${windows_props[@]}" \
  --subscribe windows window_changed
