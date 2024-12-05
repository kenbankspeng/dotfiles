#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$CONFIG_DIR/plugins/helpers/util.sh"

aerospace_workspaces() {
  echo "$(aerospace list-workspaces --all)"
}

aerospace_apps_in_all_workspaces() {
  echo "$(aerospace list-windows --all --json --format %{monitor-appkit-nsscreen-screens-id}%{workspace}%{app-bundle-id}%{app-name})"
}

aerospace_apps_in_workspace() {
  local sid="$1"
  echo "$(aerospace list-windows --workspace "$sid" | awk -F'|' '{gsub(/^ *| *$/, "", $2); print $2}')"
  # echo "$(aerospace_apps_in_all_workspaces | jq --arg space "$sid" '.[] | select(.workspace == $space)' | jq -r '.["app-name"]')"
}

aerospace_focused_workspace() {
  echo "$(aerospace list-workspaces --focused)"
}

aerospace_add_dividers() {
  # add dividers as anchor points for the workspaces
  workspaces=(0 $(aerospace_workspaces))
  for sid in $workspaces; do
    sketchybar --add item $DIVIDER.$sid left \
      --set $DIVIDER.$sid background.height=1 \
      background.color="$LAVENDER"
  done
}

aerospace_add_apps() {
  local sid=$1

  if [ -f "$CACHE_DIR/highlighted" ]; then
    read -r highlighted_space highlighted_app <"$CACHE_DIR/highlighted"
  fi

  aerospace_apps=$(aerospace_apps_in_workspace $sid)
  sketchy_apps=$(sketchy_get_space_windows $sid)

  apps_to_remove=$(unmatched_items "${aerospace_apps}" "${sketchy_apps}" 2>/dev/tty)

  if [[ -n "$apps_to_remove" ]]; then
    sketchy_remove $apps_to_remove
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

  if [ -n "${aerospace_apps}" ]; then
    app_index=0
    while read -r app; do
      ((app_index++))
      icon="$($CONFIG_DIR/icon_map.sh "$app")"
      icon_color=$([ "$highlight" = true ] && [ "$app" = "$highlighted_app" ] && echo $ACTIVE_COLOR || echo $TEXT)

      # only add if doesn't already exist
      local items=$(sketchybar --query bar | jq -r '.items[]')
      item="$WINDOW.$sid.$app_index.$app"
      if ! item_in_array "$item" "$items"; then
        sketchybar --add item $item left
        sketchybar --move $item before $DIVIDER.$sid
      fi
      sketchybar --set $item "${props[@]}" icon=$icon icon.color=$icon_color \
        click_script="aerospace workspace $sid"
    done <<<"${aerospace_apps}" # app_list has one app per line
  else
    # only add if doesn't already exist
    local items=$(sketchybar --query bar | jq -r '.items[]')
    item="$WINDOW.$sid.default"
    if ! item_in_array "$item" "$items"; then
      sketchybar --add item $item left
      sketchybar --move $item before $DIVIDER.$sid
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
    item="$WINDOW.$sid.default"
    if item_in_array "$item" $list; then
      default_exists=true
    else
      default_exists=false
    fi
    num_windows=$(echo "$list" | grep -c .)

    if [[ "$default_exists" == true && "$num_windows" -gt 1 ]]; then
      action="remove default"
    elif [[ "$default_exists" == false && "$num_windows" -eq 0 ]]; then
      sketchybar --add item $item left
      sketchybar --move $item before $DIVIDER.$sid
      sketchybar --set $item "${props[@]}" icon="·" \
        click_script="aerospace workspace $sid"
      action="add default"
    else
      action="no change"
    fi

    print "$space $default_exists $num_windows $action"

  done
}
