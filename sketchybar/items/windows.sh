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
  script="$PLUGIN_DIR/windows.sh"
)
sketchybar --add event space_created
sketchybar --add event window_created
sketchybar --add event window_destroyed
sketchybar --add item win_listener left \
  --set win_listener "${props[@]}" \
  --subscribe win_listener space_created window_created window_destroyed
