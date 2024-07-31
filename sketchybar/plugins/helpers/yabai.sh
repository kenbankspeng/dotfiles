# Get all spaces
yabai_get_spaces() {
  yabai -m query --spaces
}

# Get a specific space by its index
# $1 : space index
yabai_get_space_info() {
  yabai -m query --spaces --space "$1"
}

# Get all windows in a specific space by its index
# $1 : space index
yabai_get_windows_in_space() {
  yabai_get_space_info "$1" | jq -r ".windows"
}

# Get the type of a space by its index
# $1 : space index
yabai_get_space_type() {
  yabai_get_space_info "$1" | jq -r ".type"
}

# Get the focused space index
yabai_get_focused_space() {
  yabai_get_spaces | jq -r '.[] | select(.["has-focus"] == true) | .index'
}

# Get the first window of a space by its index
# $1 : space index
yabai_get_first_window() {
  yabai_get_windows_in_space "$1" | jq -r ".[0]"
}

# Get the last window of a space by its index
# $1 : space index
yabai_get_last_window() {
  yabai_get_windows_in_space "$1" | jq -r ".[-1]"
}

# Get the number of spaces
yabai_get_num_spaces() {
  yabai_get_spaces | jq '. | length'
}

# Get the number of windows in a space by its index
# $1 : space index
yabai_get_num_windows_in_space() {
  yabai_get_windows_in_space "$1" | jq '. | length'
}

# Get app name of a window by its id
# $1: window id
yabai_get_window_app_name() {
  yabai -m query --windows --window "$1" | jq -r '.app'
}

# Focus a specific space by its index
# $1 : space index
yabai_focus_space() {
  yabai -m space --focus "$1"
}

# Focus a specific window by its id
# $1 : window id
yabai_focus_window() {
  yabai -m window --focus "$1"
}

# Stack a window on top of another
# $1 : first window id
# $2 : last window id
yabai_rotate_stack() {
  yabai -m window "$1" --stack "$2"
}

# Toggle the layout of a space by its index
# $1 : space index
yabai_toggle_layout() {
  type=$(yabai_get_space_type "$1")
  if [ "$type" == "bsp" ]; then
    yabai -m space "$1" --layout stack
  else
    yabai -m space "$1" --layout bsp
  fi

  # Workaround for focus bug
  islast=$(yabai_get_spaces | jq '.[-1]."has-focus" == true')
  if [ "$islast" == "true" ]; then
    yabai_focus_space prev
    sleep 0.2
    yabai_focus_space next
  else
    yabai_focus_space next
    sleep 0.2
    yabai_focus_space prev
  fi
}
