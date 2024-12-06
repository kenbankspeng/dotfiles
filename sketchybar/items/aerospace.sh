#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"

# create and empty the cache files
mkdir -p "$CACHE_DIR"
touch "$CACHE"
: >"$CACHE"

sketchybar --add event aerospace_workspace_change
sketchybar --add event yabai_window_created
sketchybar --add event yabai_window_destroyed
sketchybar --add event yabai_window_focused
sketchybar --add event yabai_window_minimized
sketchybar --add event yabai_window_deminimized

aerospace_add_dividers

props=(
  icon.drawing=off
  label.drawing=off
  background.drawing=off
)
sketchy_add item space_listener left \
  --set space_listener "${props[@]}" \
  script="$PLUGIN_DIR/aerospace.sh" \
  --subscribe space_listener \
  aerospace_workspace_change \
  yabai_window_created \
  yabai_window_destroyed \
  yabai_window_focused \
  yabai_window_minimized \
  yabai_window_deminimized

sketchy_add item stack left \
  --set stack \
  script="$PLUGIN_DIR/aerospace.sh" \
  --subscribe stack mouse.clicked
