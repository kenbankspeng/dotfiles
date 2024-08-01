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
  --add item win_listener left \
  --set win_listener "${windows_props[@]}" \
  --subscribe win_listener window_changed
