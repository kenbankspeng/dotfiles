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

aerospace_add_dividers() {
  # add dividers as anchor points for the workspaces
  workspaces=(0 $(aerospace_workspaces))
  for sid in $workspaces; do
    sketchy_add item divider.$sid left \
      --set divider.$sid background.height=1 \
      background.color=$DIVIDER
  done
}

aerospace_add_apps() {
  local sid=$1

  if [ -z "$sid" ]; then
    exit
  fi

  if [ -f "$CACHE_DIR/highlighted" ]; then
    read -r highlighted_space highlighted_appid <"$CACHE_DIR/highlighted"
  fi

  aerospace_appids=$(aerospace_appids_in_workspace $sid)
  sketchy_apps=$(sketchy_get_space_windows $sid)
  apps_to_remove=$(unmatched_items "${aerospace_appids}" "${sketchy_apps}" 2>/dev/tty)

  if [[ -n "$apps_to_remove" ]]; then
    for app in ${(z)apps_to_remove}; do
      sketchy_remove "$app"
    done
  fi

  focused=$(aerospace_focused_workspace)
  background=$([ "$sid" = "$focused" ] && echo $ACTIVE_BACKGROUND || echo $TRANSPARENT)
  highlight=$([ "$sid" = "$highlighted_space" ] && echo true || echo false)

  props=(
    y_offset=1
    background.corner_radius=0
    background.color=$background
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )

  if [ -n "${aerospace_appids}" ]; then
    while read -r appid; do
      app=$(aerospace_app_names "$appid")
      icon="$($CONFIG_DIR/icon_map.sh "$app")"
      icon_color=$([ "$highlight" = true ] && [ "$appid" = "$highlighted_appid" ] && echo $ACTIVE_COLOR || echo $TEXT)

      # only add if doesn't already exist
      local items=$(sketchybar --query bar | jq -r '.items[]')
      item="window.$sid.$appid"
      if ! item_in_array "$item" "$items"; then
        sketchy_add item $item left
        sketchybar --move $item before divider.$sid
      fi
      sketchybar --set $item "${props[@]}" icon=$icon icon.color=$icon_color \
        click_script="aerospace workspace $sid"
    done <<<"${aerospace_appids}" # app_list has one app per line
  else
    # only add if doesn't already exist
    local items=$(sketchybar --query bar | jq -r '.items[]')
    item="window.$sid.default"
    if ! item_in_array "$item" "$items"; then
      sketchy_add item $item left
      sketchybar --move $item before divider.$sid
    fi
    sketchybar --set $item "${props[@]}" icon="·" \
      click_script="aerospace workspace $sid"
  fi
}

aerospace_default_apps() {
  props=(
    y_offset=1
    background.corner_radius=0
    # background.color=$background
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
      sketchy_add item $item left
      sketchybar --move $item before divider.$sid
      sketchybar --set $item "${props[@]}" icon="·" \
        click_script="aerospace workspace $sid"
    fi

  done
}
