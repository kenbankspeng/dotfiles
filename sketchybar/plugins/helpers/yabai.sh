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
    yabai -m space --focus prev
    sleep 0.2
    yabai -m space --focus next
  else
    yabai -m space --focus next
    sleep 0.2
    yabai -m space --focus prev
  fi
}
