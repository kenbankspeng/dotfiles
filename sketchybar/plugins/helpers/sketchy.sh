#!/usr/bin/env zsh

source "$CONFIG_DIR/plugins/helpers/util.sh"

# add item only if not exists
sketchy_add_item() {
  local item=$1
  local items=$(sketchybar --query bar | jq -r '.items[]')
  item=${item// /_}
  if ! item_in_array "$item" "$items"; then
    sketchybar --add item "$@"
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
  echo "$(sketchybar --query bar | jq -r '.items[] | select(contains("window"))')"
}

sketchy_get_space_windows() {
  local SPACE=$1
  echo "$(sketchybar --query bar | jq -r --arg space "$SPACE" '.items[] | select(test("^window\\." + $space + "\\."))')"
}

sketchy_get_space_app() {
  local SPACE=$1
  local APP=$2
  echo "$(sketchybar --query bar | jq --arg space "$SPACE" --arg app "$APP" '.items[] | select(test("^window\\." + $space + "\\.\\d+\\." + $app + "$"))')"
}

# returns item ex: window.3.66286.WezTerm
sketchy_get_item_by_appid() {
  # ex: 46356
  local APPID=$1
  echo "$(sketchybar --query bar | jq -r --arg appid "$APPID" '.items[] | select(test("^window\\.\\d+\\." + $appid + "\\..+$"))')"
}
