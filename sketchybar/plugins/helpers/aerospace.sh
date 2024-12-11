#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$CONFIG_DIR/plugins/helpers/util.sh"

aerospace_workspaces() {
  echo "$(aerospace list-workspaces --all)"
}

aerospace_focused_workspace() {
  echo "$(aerospace list-workspaces --focused)"
}

# returns appids ex: 46356
aerospace_appids_in_workspace() {
  local sid="$1"
  local json=$(aerospace list-windows --workspace "$sid" --json --format %{monitor-id}%{workspace}%{app-bundle-id}%{window-id}%{app-name})
  local filtered=$(echo "$json" | jq -r '.[] | ."window-id"' | jq -s -r 'join(" ")')
  echo "$filtered"
}

# returns appname ex: Cursor from appid ex: 46356
aerospace_appname_from_appid() {
  local appid="$1"
  local json=$(aerospace list-windows --all --json --format '%{monitor-id}%{workspace}%{app-bundle-id}%{window-id}%{app-name}')
  local filtered=$(echo "$json" | jq -r --arg appid "$appid" '.[] | select(."window-id" == ($appid | tonumber)) | ."app-name"')
  echo "$filtered"
}

aerospace_highlight_appid() {
  # ex: 46356
  local appid=$1
  local prev_appid

  if [ -f "$CACHE_DIR/highlighted" ]; then
    read -r prev_appid <"$CACHE_DIR/highlighted"
  fi

  if [ -n "$prev_appid" ]; then
    # prev_item ex: window.3.66286.WezTerm
    prev_item=$(sketchy_get_item_by_appid "$prev_appid")
    if [ -n "$prev_item" ]; then
      sketchybar --set $prev_item \
        icon.color=$OFF \
        background.border_color=$TRANSPARENT \
        background.color=$TRANSPARENT
    fi
  fi

  # item ex: window.3.66286.WezTerm
  item=$(sketchy_get_item_by_appid "$appid")
  if [ -n "$item" ]; then
    sketchybar --set $item \
      icon.color=$ON \
      background.border_color=$ACTIVE \
      background.color=$BLACK
  fi

  echo "$appid" >"$CACHE_DIR/highlighted"
}

aerospace_workspace_focus(){
 # item ex:window.3.66286.WezTerm
  local item=$(sketchy_get_item_by_appid $sid)
  if [ -n "$item" ]; then
    aerospace_highlight_appid $sid
    # TODO: gotcha if finder is open
    # focus on finder so that yabai_window_focused will fire next change
    osascript -e 'tell application "Finder" to activate'
  fi
}

remove_unmatched_items() {
  local sid=$1
  aerospace_appids=$(aerospace_appids_in_workspace $sid)
  sketchy_apps=$(sketchy_get_window_items_in_spaceid $sid)
  apps_to_remove=$(unmatched_items "${aerospace_appids}" "${sketchy_apps}" 2>/dev/tty)

  if [[ -n "$apps_to_remove" ]]; then
    echo "remove: $apps_to_remove"
    sketchy_remove_item $apps_to_remove
    maybe_add_default_item_to_spaceid $sid
  fi
}

aerospace_workspace_change() {
  # default window uses sid as appid
  local sid=$1
  local prev_sid=$2

  remove_unmatched_items $prev_sid
  aerospace_add_apps_in_spaceid $sid

  aerospace_workspace_focus $sid
}

maybe_add_default_item_to_spaceid() {
  local sid=$1
  if [ -z "$(sketchy_get_window_items_in_spaceid $sid)" ]; then
    local item="window.$sid.$sid.default"
    echo "add default item: $item"
    local props=(
      y_offset=1
      background.corner_radius=0
      background.height=$ITEM_HEIGHT
      label.drawing=off
      icon.font="$ICON_FONT:$ICON_FONTSIZE"
    )
    sketchy_add_item $item left \
      --move $item before divider.$sid \
      --set $item "${props[@]}" icon="·" background.border_width=$BORDER_WIDTH \
      click_script="aerospace workspace $sid"
    aerospace_highlight_appid $sid
  fi
}

maybe_remove_default_item_from_spaceid() {
  local sid="$1"
  sketchy_remove_item "window.$sid.$sid.default"
}

aerospace_remove_appid() {
  # ex: 46356
  local appid=$1
  local sid=$(aerospace_focused_workspace)
  # item ex:window.3.66286.WezTerm
  item=$(sketchy_get_item_by_appid "$appid")
  sketchy_remove_item $item

  # add default if no apps in workspace
  maybe_add_default_item_to_spaceid $sid
}


aerospace_new_appid() {
  # ex: 46356
  local appid=$1
  local sid=$(aerospace_focused_workspace)

  # remove default if it exists
  maybe_remove_default_item_from_spaceid "$sid"

  # ex: Cursor
  appname=$(aerospace_appname_from_appid "$appid")

  icon="$($CONFIG_DIR/icons_apps.sh "$appname")"
  item="window.$sid.$appid.$appname"
  props=(
    y_offset=1
    background.corner_radius=0
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )
  sketchy_add_item $item left \
    --move $item before divider.$sid \
    --set $item "${props[@]}" \
    icon=$icon icon.color=$OFF \
    background.border_width=$BORDER_WIDTH \
    click_script="aerospace focus --window-id $appid"
}

aerospace_add_apps_in_spaceid() {
  local sid=$1

  props=(
    y_offset=1
    background.corner_radius=0
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )

  aerospace_appids=$(aerospace_appids_in_workspace $sid)

  if [ -n "${aerospace_appids}" ]; then
    # split appids by space
    for appid in ${(s: :)aerospace_appids}; do
      appname=$(aerospace_appname_from_appid "$appid")
      icon="$($CONFIG_DIR/icons_apps.sh "$appname")"

      # only add if doesn't already exist
      item="window.$sid.$appid.$appname"
      sketchy_add_item $item left \
        --move $item before divider.$sid \
        --set $item "${props[@]}" \
        icon=$icon icon.color=$OFF \
        background.border_width=$BORDER_WIDTH \
        click_script="aerospace focus --window-id $appid"
    done
  else
    maybe_add_default_item_to_spaceid $sid
  fi
}

