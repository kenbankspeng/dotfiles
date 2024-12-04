#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

# startup - add all workspaces and apps
if [ "$SENDER" = "forced" ]; then
  # aerospace event
  for space in $(aerospace_workspaces); do
    aerospace_add_apps $space
  done
elif [ "$SENDER" = "aerospace_workspace_change" ]; then
  # aerospace event
  aerospace_add_apps $PREV_WORKSPACE
  aerospace_add_apps $FOCUSED_WORKSPACE
elif [ "$SENDER" = "yabai_window_moved" ]; then
  # yabai event
  for space in $(aerospace_workspaces); do
    aerospace_add_apps $space
  done
else
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  #   yabai_window_created
  #   yabai_window_destroyed
  focused=$(aerospace_focused_workspace)
  aerospace_add_apps $focused
fi
