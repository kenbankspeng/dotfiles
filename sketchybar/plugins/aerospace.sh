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
  echo "$PREV_WORKSPACE $FOCUSED_WORKSPACE" >"$CACHE_DIR/workspace_change"
  aerospace_add_apps $PREV_WORKSPACE
  aerospace_add_apps $FOCUSED_WORKSPACE
  aerospace_default_apps
elif [ "$SENDER" = "yabai_window_created" ] || [ "$SENDER" = "yabai_window_destroyed" ]; then
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  aerospace_add_apps $(aerospace_focused_workspace)
  aerospace_default_apps
elif [ "$SENDER" = "yabai_window_focused" ]; then
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  if [ -f "$CACHE_DIR/workspace_change" ]; then
    read -r prev_workspace focused_workspace <"$CACHE_DIR/workspace_change"
    app_name=$(yabai_get_window_app_name $ID)
    appid="$ID.$app_name"
    echo "$focused_workspace $appid" >"$CACHE_DIR/highlighted"
    aerospace_add_apps $prev_workspace
    aerospace_add_apps $focused_workspace
    aerospace_default_apps
  fi
elif [ "$SENDER" = "yabai_window_minimized" ] || [ "$SENDER" = "yabai_window_deminimized" ]; then
  aerospace_add_apps $(aerospace_focused_workspace)
  aerospace_default_apps
fi
