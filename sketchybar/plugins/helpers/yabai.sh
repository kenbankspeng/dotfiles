yabai_get_windows_in_space() {
  local sid="$1"
  local result=()
  while IFS= read -r window_id; do
    result+=("$window_id")
  done < <(yabai -m query --spaces --space "$sid" | jq -r ".windows[]")

  # Return the result as a space-separated string
  echo "${result[@]}"
}

yabai_get_window_app_name() {
  local wid="$1"
  yabai -m query --windows --window "$wid" | jq -r '.app'
}

yabai_get_focused_window() {
  local wid="$1"
  yabai -m query --windows --window "$wid" | jq -r '.id'
}
