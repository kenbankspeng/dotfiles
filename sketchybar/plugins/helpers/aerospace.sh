#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$CONFIG_DIR/plugins/helpers/util.sh"


aerospace_workspaces() {
  echo "$(aerospace list-workspaces --all)"
}

aerospace_focused_workspace() {
  echo "$(aerospace list-workspaces --focused)"
}

aerospace_appids_in_workspace() {
  local sid="$1"
  echo "$(aerospace list-windows --workspace "$sid" --json --format %{monitor-id}%{workspace}%{app-bundle-id}%{window-id}%{app-name} | jq -r '.[] | "\(.["window-id"]).\(.["app-name"])"')"
}

aerospace_app_names() {
  local appids="$1"
  echo "$appids" | awk -F '.' '{print $2}' | sort
}

aerospace_change_focus(){
  local appid=$1
  local prev_appid

  if [ -f "$CACHE_DIR/highlighted" ]; then
    read -r prev_appid <"$CACHE_DIR/highlighted"
  fi

  if [ -n "$prev_appid" ]; then
    prev_item=$(sketchy_get_item "$prev_appid")
    if [ -n "$prev_item" ]; then
      sketchybar --set $prev_item icon.color=$OFF background.border_color=$TRANSPARENT
    fi
  fi

  item=$(sketchy_get_item "$appid")
  if [ -n "$item" ]; then
    sketchybar --set $item icon.color=$ON background.border_color=$ACTIVE
  fi

  echo "$appid" >"$CACHE_DIR/highlighted"
}

aerospace_space_focus() {
  # default window uses sid as appid
  local sid=$1
  local item=$(sketchy_get_item $sid)
  if [ -n "$item" ]; then
    aerospace_change_focus $sid
    # focus on finder so that yabai_window_focused will fire next change
    osascript -e 'tell application "Finder" to activate'
  fi
}

aerospace_get_appid() {
  local sid=$1
  local appnum=$2
  local appids=$(aerospace_appids_in_workspace "$sid")
  echo "$appids" | awk -F '.' -v appnum="$appnum" '$1 == appnum {print $0}'
}

aerospace_new_app() {
  local sid=$1
  local appnum=$2
  
  # remove default if it exists
  sketchy_remove "window.$sid.$sid.default"

  appid=$(aerospace_get_appid "$sid" "$appnum")
  app=$(aerospace_app_names "$appid")
  icon="$($CONFIG_DIR/icons_apps.sh "$app")"
  item="window.$sid.$appid"
  props=(

    y_offset=1
    background.corner_radius=0
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )
  sketchy_add item $item left \
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

  aerospace_appids=$(aerospace_appids_in_workspace $sid)
  sketchy_apps=$(sketchy_get_space_windows $sid)
  
  if [[ -n "$sketchy_apps" ]]; then
    for app in ${(z)sketchy_apps}; do
      sketchy_remove "$app"
    done
  fi

  props=(
    y_offset=1
    background.corner_radius=0
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )

  if [ -n "${aerospace_appids}" ]; then
    while read -r appid; do
      app=$(aerospace_app_names "$appid")
      icon="$($CONFIG_DIR/icons_apps.sh "$app")"
    
      # only add if doesn't already exist  
      item="window.$sid.$appid"
      sketchy_add item $item left \
        --move $item before divider.$sid \
        --set $item "${props[@]}" \
        icon=$icon icon.color=$OFF \
        background.border_width=$BORDER_WIDTH \
        click_script="aerospace workspace $sid"
    done <<<"${aerospace_appids}" # app_list has one app per line
  else
    # only add if doesn't already exist
    local items=$(sketchybar --query bar | jq -r '.items[]')
    item="window.$sid.$sid.default"
    if ! item_in_array "$item" "$items"; then
      sketchy_add item $item left \
      --move $item before divider.$sid
    fi
    sketchybar --set $item "${props[@]}" icon="·" background.border_width=$BORDER_WIDTH \
      click_script="aerospace workspace $sid"
  fi
}

aerospace_default_apps() {
  props=(
    y_offset=1
    background.corner_radius=0
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )

  for sid in $(aerospace_workspaces); do
    list=$(sketchy_get_space_windows $sid)
    item="window.$sid.default"
    if item_in_array "$item" $list; then
      default_exists=true
    else
      default_exists=false
    fi
    num_windows=$(echo "$list" | grep -c .)

    if [[ "$default_exists" == true && "$num_windows" -gt 1 ]]; then
      sketchy_remove $item
    elif [[ "$default_exists" == false && "$num_windows" -eq 0 ]]; then
      sketchy_add item $item left \
      --move $item before divider.$sid \
      --set $item "${props[@]}" icon="·" \
        click_script="aerospace workspace $sid"
    fi
  done
}
