#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$CONFIG_DIR/plugins/helpers/util.sh"

aerospace_workspaces() {
  echo "$(aerospace list-workspaces --all)"
}

aerospace_focused_workspace() {
  echo "$(aerospace list-workspaces --focused)"
}

# returns tags: 46356.Cursor
aerospace_apptags_in_workspace() {
  local sid="$1"
  echo "$(aerospace list-windows --workspace "$sid" --json --format %{monitor-id}%{workspace}%{app-bundle-id}%{window-id}%{app-name} | jq -r '.[] | "\(.["window-id"]).\(.["app-name"])"')"
}

aerospace_app_names() {
  # ex: 46356.Cursor
  local apptags="$1"

  # ex: Cursor
  echo "$apptags" | awk -F '.' '{print $2}' | sort
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
      sketchybar --set $prev_item icon.color=$OFF background.border_color=$TRANSPARENT
    fi
  fi

  # item ex: window.3.66286.WezTerm
  item=$(sketchy_get_item_by_appid "$appid")
  if [ -n "$item" ]; then
    sketchybar --set $item icon.color=$ON background.border_color=$ACTIVE
  fi

  echo "$appid" >"$CACHE_DIR/highlighted"
}

aerospace_space_focus() {
  # default window uses sid as appid
  local sid=$1
  # item ex:window.3.66286.WezTerm
  local item=$(sketchy_get_item_by_appid $sid)
  if [ -n "$item" ]; then
    aerospace_highlight_appid $sid
    # TODO: gotcha if finder is open
    # focus on finder so that yabai_window_focused will fire next change
    osascript -e 'tell application "Finder" to activate'
  fi
}

aerospace_get_apptag() {
  local sid=$1

  # ex: 46356
  local appid=$2

  # apptags: 46356.Cursor
  local apptags=$(aerospace_apptags_in_workspace "$sid")
  echo "$apptags" | awk -F '.' -v appid="$appid" '$1 == appid {print $0}'
}

aerospace_remove_appid() {
  # ex: 46356
  local appid=$1
  local sid=$(aerospace_focused_workspace)
  # item ex:window.3.66286.WezTerm
  item=$(sketchy_get_item_by_appid "$appid")
  sketchy_remove_item $item

  # add default if no apps in workspace
  if [ -z "$(sketchy_get_space_windows $sid)" ]; then
    item="window.$sid.$sid.default"
    props=(
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

aerospace_new_app() {
  # ex: 46356
  local appid=$1
  local sid=$(aerospace_focused_workspace)

  # remove default if it exists
  sketchy_remove_item "window.$sid.$sid.default"

  # apptag: 46356.Cursor
  apptag=$(aerospace_get_apptag "$sid" "$appid")

  # ex: Cursor
  app=$(aerospace_app_names "$apptag")

  icon="$($CONFIG_DIR/icons_apps.sh "$app")"
  item="window.$sid.$apptag"
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
    click_script="aerospace workspace $sid"
}

aerospace_add_apps() {
  local sid=$1

  if [ -z "$sid" ]; then
    exit
  fi

  # ex: 46356.Cursor
  aerospace_apptags=$(aerospace_apptags_in_workspace $sid)

  props=(
    y_offset=1
    background.corner_radius=0
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )

  if [ -n "${aerospace_apptags}" ]; then
    # ex: 46356.Cursor
    while read -r apptag; do
      # ex: Cursor
      app=$(aerospace_app_names "$apptag")
      icon="$($CONFIG_DIR/icons_apps.sh "$app")"

      # only add if doesn't already exist
      item="window.$sid.$apptag"
      sketchy_add_item $item left \
        --move $item before divider.$sid \
        --set $item "${props[@]}" \
        icon=$icon icon.color=$OFF \
        background.border_width=$BORDER_WIDTH \
        click_script="aerospace workspace $sid"
    done <<<"${aerospace_apptags}" # app_list has one app per line
  else
    # only add if doesn't already exist
    local items=$(sketchybar --query bar | jq -r '.items[]')
    item="window.$sid.$sid.default"
    if ! item_in_array "$item" "$items"; then
      sketchy_add_item $item left \
        --move $item before divider.$sid
    fi
    sketchybar --set $item "${props[@]}" icon="·" background.border_width=$BORDER_WIDTH \
      click_script="aerospace workspace $sid"
  fi
}
