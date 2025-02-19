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

sketchy_add_workspace() {
  local sid="$1"
  local start="workspace.start.$sid"
  local end="workspace.end.$sid"
  sketchybar --add bracket workspace.$sid "$start" "$end" \
           --set workspace.$sid \
                    background.corner_radius=0  \
                    background.color=$(get_workspace_background $sid)
}

sketchy_highlight_workspace() {
  local sid="$1"
  local prev_sid

  if [ -f "$CACHE_DIR/highlighted.workspace" ]; then
    read -r prev_sid <"$CACHE_DIR/highlighted.workspace"
  fi

  if [ -n "$prev_sid" ] && [ "$prev_sid" != "$sid" ]; then
    sketchybar --set "workspace.$prev_sid" background.color=$(get_workspace_background $prev_sid)
  fi 

  sketchybar --set "workspace.$sid" background.color=$(get_workspace_background $sid)

  echo "$sid" >"$CACHE_DIR/highlighted.workspace"
}


sketchy_highlight_window_id() {
  # ex: 46356
  local window_id="$1"
  local prev_window_id

  if [ -f "$CACHE_DIR/highlighted.window" ]; then
    read -r prev_window_id <"$CACHE_DIR/highlighted.window"
  fi

  if [ -n "$prev_window_id" ] && [ "$prev_window_id" != "$window_id" ]; then
    prev_item=$(sketchy_get_item_by_window_id "$prev_window_id")
    if [ -n "$prev_item" ]; then
      sketchybar --set "$prev_item" \
        icon.color="$OFF"
    fi
  fi

  # item ex: window.3.66286.WezTerm
  item=$(sketchy_get_item_by_window_id "$window_id")
  if [ -n "$item" ]; then
    sketchybar --set "$item" \
      icon.color="$WORKSPACE_FOCUSED_ICON"
  fi

  echo "$window_id" >"$CACHE_DIR/highlighted.window"
}

# helper
get_workspace_background() {
  local sid="$1"
  local focused=$(aerospace_focused_workspace)
  if [ "$sid" -eq "$focused" ]; then
    space_background="$WORKSPACE_FOCUSED_BACKGROUND"
  elif [ $((sid % 2)) -eq 0 ]; then
    space_background="$WORKSPACE_EVEN_BACKGROUND"
  else
    space_background="$WORKSPACE_ODD_BACKGROUND"
  fi
  echo "$space_background"
}

get_workspace_foreground() {
  local sid="$1"
  local focused=$(aerospace_focused_workspace)
  if [ "$sid" -eq "$focused" ]; then
    space_foreground="$WORKSPACE_FOCUSED_FOREGROUND"
  elif [ $((sid % 2)) -eq 0 ]; then
    space_foreground="$WORKSPACE_EVEN_FOREGROUND" 
  else
    space_foreground="$WORKSPACE_ODD_FOREGROUND"
  fi
  echo "$space_foreground"
}

sketchy_highlight_workspace_and_window() {
  local sid="$1"
  local window_id="$2"
  local prev_sid
  local prev_window_id

  if [ -f "$CACHE_DIR/highlighted" ]; then
    read -r prev_sid prev_window_id <"$CACHE_DIR/highlighted"
  fi

  if [ -n "$prev_sid" ] && [ "$prev_sid" != "$sid" ]; then
    sketchybar --set "workspace.$prev_sid" background.color=$(get_workspace_background $prev_sid)
  fi

  if [ -n "$prev_window_id" ] && [ "$prev_window_id" != "$window_id" ]; then
    prev_item=$(sketchy_get_item_by_window_id "$prev_window_id")
    if [ -n "$prev_item" ]; then
      sketchybar --set "$prev_item" icon.color="$OFF"
    fi
  fi

  sketchybar --set "workspace.$sid" background.color=$(get_workspace_background $sid)

  item=$(sketchy_get_item_by_window_id "$window_id")
  if [ -n "$item" ]; then
    sketchybar --set "$item" icon.color="$WORKSPACE_FOCUSED_ICON"
  fi

  echo "$sid $window_id" >"$CACHE_DIR/highlighted"
}

sketchy_get_highlighted() {
  if [ -f "$CACHE_DIR/highlighted" ]; then
    read -r sid window_id <"$CACHE_DIR/highlighted"
    echo "$sid $window_id"
  fi
}
