#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

# File to store the last execution time
LAST_EXECUTION_FILE="/tmp/aerospace_last_execution_time"

# Function to get the last execution time
get_last_execution_time() {
  if [ -f "$LAST_EXECUTION_FILE" ]; then
    cat "$LAST_EXECUTION_FILE"
  else
    echo 0
  fi
}

# Function to update the last execution time
update_last_execution_time() {
  date +%s >"$LAST_EXECUTION_FILE"
}

# startup - add all workspaces and apps
if [ "$SENDER" = "forced" ]; then
  print "$SENDER"
  # aerospace event
  for space in $(aerospace_workspaces); do
    aerospace_add_apps $space
  done
  update_last_execution_time
elif [ "$SENDER" = "aerospace_workspace_change" ]; then
  print "$SENDER"
  # aerospace event
  aerospace_add_apps $PREV_WORKSPACE
  aerospace_add_apps $FOCUSED_WORKSPACE
  update_last_execution_time
elif [ "$SENDER" = "yabai_window_created" ] || [ "$SENDER" = "yabai_window_destroyed" ]; then
  print "$SENDER"
  # yabai events don't have $PREV_WORKSPACE or $FOCUSED_WORKSPACE
  focused=$(aerospace_focused_workspace)
  aerospace_add_apps $focused
  update_last_execution_time
else
  # yabai_window_moved
  current_time=$(date +%s)
  last_execution_time=$(get_last_execution_time)
  # print "current_time: $current_time"
  # print "last_execution_time: $last_execution_time"
  # print "diff: $((current_time - last_execution_time))"
  # if ((current_time - last_execution_time > 5)); then
  # print "$SENDER"
  # for space in $(aerospace_workspaces); do
  #   aerospace_add_apps $space
  # done
  update_last_execution_time
  # fi
fi
