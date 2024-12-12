#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$PLUGIN_DIR/helpers/yabai.sh"
source "$PLUGIN_DIR/helpers/util.sh"

# start_time=$(date +%s%3)  # Start time in milliseconds
log "------------"

if [ "$SENDER" = "forced" ]; then
  for space in $(aerospace_workspaces); do
    aerospace_add_apps_in_spaceid "$space"
  done
  aerospace_highlight_focused_window
elif [ "$SENDER" = "yabai_window_focused" ]; then
  log "$SENDER $ID"
  aerospace_highlight_focused_window
elif [ "$SENDER" = "aerospace_workspace_change" ]; then
  log "$SENDER $PREV_WORKSPACE -> $FOCUSED_WORKSPACE"
  aerospace_workspace_change "$FOCUSED_WORKSPACE" "$PREV_WORKSPACE"
elif [ "$SENDER" = "yabai_window_created" ] || [ "$SENDER" = "yabai_window_deminimized" ]; then
  aerospace_new_window_id "$ID"
  aerospace_highlight_focused_window
elif [ "$SENDER" = "yabai_window_destroyed" ] || [ "$SENDER" = "yabai_window_minimized" ]; then
  aerospace_remove_window_id "$ID"
  aerospace_highlight_focused_window
fi

# end_time=$(date +%s3)  # End time in milliseconds
# echo "$SENDER -- $((end_time - start_time)) ms"
