# Get the number of spaces
yabai_get_num_spaces() {
  yabai -m query --spaces | jq '. | length'
}

# Get a specific space by its index
# $1 : space index
yabai_get_space_info() {
  yabai -m query --spaces --space "$1"
}

# $1: window id
yabai_get_window_app_name() {
  yabai -m query --windows --window "$1" | jq -r '.app'
}

# Get all windows in a specific space by its index
# $1 : space index
yabai_get_windows_in_space() {
  while IFS= read -r window_id; do
    result+=("$window_id")
  done < <(yabai_get_space_info "$1" | jq -r ".windows[]")

  # Return the result as a space-separated string
  echo "${result[@]}"
}

# Focus a specific space by its index
# $1 : space index
yabai_focus_window() {
  yabai -m window --focus "$1"
}

# Get the type of a space by its index
# $1 : space index
yabai_get_space_type() {
  yabai_get_space_info "$1" | jq -r ".type"
}

# get the space of a window
# $1 : window id
yabai_get_window_space() {
  yabai -m query --windows | jq -r --arg window_id "$1" '.[] | select(.id == $window_id) | .space'
}

# focusing on the last window brings it to the top
yabai_rotate_stack() {
  yabai -m window --focus $(yabai_get_windows_focused_space | jq -r ".[-1]")
}

yabai_get_focused_window() {
  yabai -m query --windows | jq -r '.[] | select(.["has-focus"] == true) | .id'
}

############ focused space ############

yabai_get_focused_space_info() {
  yabai -m query --spaces | jq -r '.[] | select(.["has-focus"] == true)'
}

yabai_get_focused_space_type() {
  yabai_get_focused_space_info | jq -r .type
}

yabai_get_focused_space() {
  yabai_get_focused_space_info | jq -r '.index'
}

# reutrns array of window ids
yabai_get_windows_focused_space() {
  yabai_get_focused_space_info | jq -r '.windows'
}
