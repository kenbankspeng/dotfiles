#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$PLUGIN_DIR/helpers/yabai.sh"

# startup - add all workspaces and apps
if [ "$SENDER" = "forced" ]; then
  # aerospace event
  for space in $(aerospace_workspaces); do
    aerospace_add_apps $space
  done
  aerospace_default_apps
elif [ "$SENDER" = "aerospace_workspace_change" ]; then
  # aerospace event
  # echo "$PREV_WORKSPACE $FOCUSED_WORKSPACE" >"$CACHE_DIR/workspace_change"
  # aerospace_add_apps $PREV_WORKSPACE
  # aerospace_add_apps $FOCUSED_WORKSPACE
  # aerospace_default_apps
elif [ "$SENDER" = "yabai_window_created" ] || [ "$SENDER" = "yabai_window_destroyed" ]; then
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  aerospace_add_apps $(aerospace_focused_workspace)
  aerospace_default_apps
elif [ "$SENDER" = "yabai_window_focused" ]; then
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  aerospace_change_focus $ID
elif [ "$SENDER" = "yabai_window_minimized" ] || [ "$SENDER" = "yabai_window_deminimized" ]; then
  aerospace_add_apps $(aerospace_focused_workspace)
  aerospace_default_apps
fi
