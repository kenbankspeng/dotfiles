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
sketchy_remove_item() {
  local item=$1
  local items=$(sketchybar --query bar | jq -r '.items[]')
  if item_in_array "$item" "$items"; then
    sketchybar --remove "$@"
  fi
}

sketchy_get_window_items_in_spaceid() {
  local sid=$1
  echo "$(sketchybar --query bar | jq -r --arg sid "$sid" '.items[] | select(test("^window\\." + $sid + "\\."))')"
}

# returns item ex: window.3.66286.WezTerm
sketchy_get_item_by_appid() {
  # ex: 46356
  local appid=$1
  echo "$(sketchybar --query bar | jq -r --arg appid "$appid" '.items[] | select(test("^window\\.\\d+\\." + $appid + "\\..+$"))')"
}
