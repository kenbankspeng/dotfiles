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
  local window_id="$1"
  yabai -m query --windows --window "$window_id" | jq -r '.app'
}

yabai_get_focused_window_id() {
  local window_id="$1"
  yabai -m query --windows --window "$window_id" | jq -r '.id'
}

yabai_autofocus() {
  # autofocus / off / autoraise
  setting="$(yabai -m config focus_follows_mouse)"
  if [ "$setting" != "disabled" ]; then
    yabai -m config focus_follows_mouse off
  else
    yabai -m config focus_follows_mouse autofocus
  fi
  # requery
  echo "$(yabai -m config focus_follows_mouse)"
}
