source "$CONFIG_DIR/plugins/helpers/util.sh"

# add item only if not exists
sketchy_add() {
  local item=$2
  local items=$(sketchybar --query bar | jq -r '.items[]')
  if ! item_in_array "$item" "$items"; then
    sketchybar --add "$@"
  fi
}

# remove item only if exists
sketchy_remove() {
  local item=$1
  local items=$(sketchybar --query bar | jq -r '.items[]')
  if item_in_array "$item" "$items"; then
    sketchybar --remove "$@"
  fi
}

# returns sketchy names
sketchy_get_all_windows() {
  sketchybar --query bar | jq -r '.items[] | select(contains("$WINDOW"))'
}

sketchy_get_space_windows() {
  local SPACE=$1
  sketchybar --query bar | jq -r --arg space "$SPACE" '.items[] | select(test("^window\\." + $space + "\\."))'
}

sketchy_get_space_app() {
  local SPACE=$1
  local APP=$2
  sketchybar --query bar | jq --arg space "$SPACE" --arg app "$APP" '.items[] | select(test("^window\\." + $space + "\\.\\d+\\." + $app + "$"))'
}
