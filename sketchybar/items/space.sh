#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
mkdir -p "$CACHE_DIR"
touch "$BRACKET_CACHE_FILE"
touch "$WINDOWS_CACHE_FILE"

# empty the cache files
: >"$BRACKET_CACHE_FILE"
: >"$WINDOWS_CACHE_FILE"

props=(
  label.drawing=off
  icon.drawing=off
  background.drawing=off
  script="$PLUGIN_DIR/space.sh"
)
sketchybar --add event window_changed \
  --add item win_listener left \
  --set win_listener "${props[@]}" \
  --subscribe win_listener window_changed
