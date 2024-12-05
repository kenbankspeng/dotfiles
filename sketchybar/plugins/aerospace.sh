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
elif [ "$SENDER" = "aerospace_workspace_change" ]; then
  # aerospace event
  echo "$PREV_WORKSPACE $FOCUSED_WORKSPACE" >"$CACHE_DIR/workspace_change"
  aerospace_add_apps $PREV_WORKSPACE
  aerospace_add_apps $FOCUSED_WORKSPACE
elif [ "$SENDER" = "yabai_window_created" ] || [ "$SENDER" = "yabai_window_destroyed" ]; then
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  aerospace_add_apps $(aerospace_focused_workspace)
elif [ "$SENDER" = "yabai_window_focused" ]; then
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  if [ -f "$CACHE_DIR/workspace_change" ]; then
    read -r prev_workspace focused_workspace <"$CACHE_DIR/workspace_change"
    highlighted_app=$(yabai_get_window_app_name $ID)
    echo "$focused_workspace $highlighted_app" >"$CACHE_DIR/highlighted"
    aerospace_add_apps $prev_workspace
    aerospace_add_apps $focused_workspace
  fi
else
  print "$SENDER"

  # yabai_window_moved
  # for space in $(aerospace_workspaces); do
  #   aerospace_add_apps $space
  # done
  # fi
fi
