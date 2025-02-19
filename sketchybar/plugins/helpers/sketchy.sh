#!/usr/bin/env bash

source "$CONFIG_DIR/plugins/helpers/util.sh"

# add item only if not exists
sketchy_add_item() {
  local item="$1"
  local items=$(sketchybar --query bar | jq -r '.items[]')
  item=${item// /_}
  if ! item_in_array "$item" "$items"; then
    sketchybar --add item "$@"
  fi
}

# remove item only if exists
sketchy_remove_item() {
  local item="$1"
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
sketchy_get_item_by_window_id() {
  # ex: 46356
  local window_id="$1"
  echo "$(sketchybar --query bar | jq -r --arg window_id "$window_id" '.items[] | select(test("^window\\.\\d+\\." + $window_id + "\\..+$"))')"
}

sketchy_get_space_by_item() {
  local item="$1"
  echo "$item" | awk -F'.' '{print $2}'
}

sketchy_get_group_color() {
  local sid="$1"
  local space_color="$GROUP"
  if [ "$sid" -eq 1 ]; then
    space_color="$RED"
  elif [ $((sid % 2)) -eq 0 ]; then
    space_color="$GROUP_ALT"
  fi
  echo "$space_color"
}


sketchy_add_group() {
  local sid="$1"
  local start="divider.start.$sid"
  local end="divider.end.$sid"
  sketchybar --add bracket group.$sid "$start" "$end" \
           --set group.$sid \
                    background.corner_radius=0  \
                    background.color=$(sketchy_get_group_color $sid)
}

