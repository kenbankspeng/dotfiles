#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$PLUGIN_DIR/helpers/yabai.sh"

if [ "$SENDER" = "forced" ]; then
  # startup - add all workspaces and apps
  for space in $(aerospace_workspaces); do
    aerospace_add_apps $space
  done
elif [ "$SENDER" = "yabai_window_focused" ]; then
  aerospace_highlight_appid $ID
elif [ "$SENDER" = "aerospace_workspace_change" ]; then
  aerospace_space_focus $FOCUSED_WORKSPACE
elif [ "$SENDER" = "yabai_window_created" ] || [ "$SENDER" = "yabai_window_deminimized" ]; then
  aerospace_new_app $ID
  aerospace_highlight_appid $ID
elif [ "$SENDER" = "yabai_window_destroyed" ] || [ "$SENDER" = "yabai_window_minimized" ]; then
  aerospace_remove_app $ID
fi
