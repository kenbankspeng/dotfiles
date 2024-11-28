source "$CONFIG_DIR/plugins/helpers/util.sh"

# a quiter sketchybar - add only if not exists
sketchy_add() {
  local item=$2
  local items=$(sketchybar --query bar | jq -r '.items[]')
  if ! item_in_array "$item" "$items"; then
    echo "adding $item"
    sketchybar --add "$@"
  fi
}

# a quiter sketchybar - remove only if exists
sketchy_remove() {
  local item=$1
  echo "removing $item"
  local items=$(sketchybar --query bar | jq -r '.items[]')
  if item_in_array "$item" "$items"; then
    sketchybar --remove "$@"
  fi
}

# returns handles not ids
sketchy_get_all_window_handles() {
  sketchybar --query bar | jq -r '.items[] | select(contains("window"))'
}
