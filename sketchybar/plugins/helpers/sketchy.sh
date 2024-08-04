source "$CONFIG_DIR/plugins/helpers/util.sh"

# a quiter sketchybar - add/remove only if exists
sketchy() {
  local item=$3
  local items=$(sketchybar --query bar | jq -r '.items[]')
  if ! item_in_array "$item" "$items"; then
    sketchybar "$@"
  fi
}

sketchy_get_all_windows() {
  sketchybar --query bar | jq -r '.items[] | select(contains("window"))'
}
