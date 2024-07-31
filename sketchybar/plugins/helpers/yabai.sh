# Get all spaces
get_spaces() {
  yabai -m query --spaces
}

# Get a specific space by its index
# $1 : space index
get_space_info() {
  yabai -m query --spaces --space "$1"
}

# Get all windows in a specific space by its index
# $1 : space index
get_windows_in_space() {
  get_space_info "$1" | jq -r ".windows"
}

# Get the type of a space by its index
# $1 : space index
space_type() {
  get_space_info "$1" | jq -r ".type"
}

# Get the focused space index
focused_space() {
  get_spaces | jq -r '.[] | select(.["has-focus"] == true) | .index'
}

# Get the first window of a space by its index
# $1 : space index
first_window() {
  get_windows_in_space "$1" | jq -r ".[0]"
}

# Get the last window of a space by its index
# $1 : space index
last_window() {
  get_windows_in_space "$1" | jq -r ".[-1]"
}

# Get the number of spaces
num_spaces() {
  get_spaces | jq '. | length'
}

# Toggle the layout of a space by its index
# $1 : space index
toggle_layout() {
  type=$(space_type "$1")
  if [ "$type" == "bsp" ]; then
    yabai -m space "$1" --layout stack
  else
    yabai -m space "$1" --layout bsp
  fi

  # Workaround for focus bug
  islast=$(get_spaces | jq '.[-1]."has-focus" == true')
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
