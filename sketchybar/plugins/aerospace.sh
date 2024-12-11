#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$PLUGIN_DIR/helpers/yabai.sh"

start_time=$(date +%s%3N)  # Start time in milliseconds

if [ "$SENDER" = "forced" ]; then
  for space in $(aerospace_workspaces); do
    aerospace_add_apps_in_spaceid $space
  done
  aerospace_highlight_focused_window
elif [ "$SENDER" = "yabai_window_focused" ]; then
  aerospace_highlight_focused_window
elif [ "$SENDER" = "aerospace_workspace_change" ]; then
  aerospace_workspace_change $FOCUSED_WORKSPACE $PREV_WORKSPACE
elif [ "$SENDER" = "yabai_window_created" ] || [ "$SENDER" = "yabai_window_deminimized" ]; then
  aerospace_new_window_id $ID
  aerospace_highlight_focused_window
elif [ "$SENDER" = "yabai_window_destroyed" ] || [ "$SENDER" = "yabai_window_minimized" ]; then
  aerospace_remove_window_id $ID
  aerospace_highlight_focused_window
fi

end_time=$(date +%s%3N)  # End time in milliseconds
echo "$SENDER -- start: $start_time -- end: $end_time"
