#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
mkdir -p "$CACHE_DIR"
touch "$BRACKET_CACHE_FILE"
touch "$WINDOWS_CACHE_FILE"

# empty the cache files
: >"$BRACKET_CACHE_FILE"
: >"$WINDOWS_CACHE_FILE"

props=(
  icon.drawing=off
  icon.padding_left=0
  icon.padding_right=0
  label.drawing=off
  label.padding_left=0
  label.padding_right=0
  background.drawing=off
  padding_left=0
  padding_right=0
  script="$PLUGIN_DIR/windows.sh"
)
sketchybar --add event focus_changed
sketchybar --add event space_changed
sketchybar --add event window_created
sketchybar --add event window_destroyed
sketchybar --add item win_listener left \
  --set win_listener "${props[@]}" \
  --subscribe win_listener window_created window_destroyed space_changed focus_changed
