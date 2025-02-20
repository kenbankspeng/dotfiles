#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$CONFIG_DIR/plugins/helpers/util.sh"
source "$CONFIG_DIR/env.sh"


aerospace_workspaces() {
  echo "$(aerospace list-workspaces --all)"
}

aerospace_focused_workspace() {
  echo "$(aerospace list-workspaces --focused)"
}

# returns window_ids ex: 46356
aerospace_window_ids_in_workspace() {
  local sid="$1"
  local json=$(aerospace list-windows --workspace "$sid" --json --format %{monitor-id}%{workspace}%{app-bundle-id}%{window-id}%{app-name})
  local filtered=$(echo "$json" | jq -r '.[] | ."window-id"' | jq -s -r 'join(" ")')
  echo "$filtered"
}

# returns appname ex: Cursor from window_id ex: 46356
aerospace_appname_from_window_id() {
  local window_id="$1"
  local json=$(aerospace list-windows --all --json --format '%{monitor-id}%{workspace}%{app-bundle-id}%{window-id}%{app-name}')
  local filtered=$(echo "$json" | jq -r --arg window_id "$window_id" '.[] | select(."window-id" == ($window_id | tonumber)) | ."app-name"')
  echo "$filtered"
}


aerospace_workspace_focus(){
  local sid="$1"
  local check_for_default_item=$(sketchy_get_item_by_window_id "$sid")
  if [ -n "$check_for_default_item" ]; then
    # TODO: if finder is already open, this doesn't work
    # focus on finder so that yabai_window_focused will fire next change
    osascript -e 'tell application "Finder" to activate'
    # for default item, use spaceid as window_id
    sketchy_highlight_window_id "$sid"
  else
    sketchy_highlight_workspace "$sid"
  fi
}

remove_unmatched_items() {
  local sid="$1"
  aerospace_window_ids=$(aerospace_window_ids_in_workspace "$sid")
  sketchy_apps=$(sketchy_get_window_items_in_spaceid "$sid")
  apps_to_remove=$(unmatched_items "$aerospace_window_ids" "$sketchy_apps")
  if [[ -n "$apps_to_remove" ]]; then
    sketchy_remove_item "$apps_to_remove"
    maybe_add_default_item_to_spaceid "$sid"
  fi
}

aerospace_highlight_focused_window() {
  local sid=$(aerospace_focused_workspace)
  local window_id=$(yabai_get_focused_window_id)

  sketchy_highlight_window_id "$window_id"
}

aerospace_workspace_change() {
  # default window uses sid as window_id
  local sid="$1"
  local prev_sid="$2"

  remove_unmatched_items "$prev_sid"
  aerospace_add_apps_in_spaceid "$sid"

  maybe_remove_default_item_from_spaceid "$sid"
  aerospace_highlight_focused_window
}

maybe_add_default_item_to_spaceid() {
  local sid="$1"
  local items=$(sketchy_get_window_items_in_spaceid "$sid")
  
  local icon="$((sid % 10))"
  local font_size=$(($ICON_FONTSIZE-4))
  # HACK text 5 is not rendering (bug) so use special icon for 5
  if [ "$icon" -eq 5 ]; then
    icon="󰬾"
    font_size=$(($ICON_FONTSIZE+3))
  fi

  if [ -z "$items" ]; then
    # if no items, add a default item
    local item="window.$sid.$sid.default"
    local props=(
      background.corner_radius=0
      icon.font="$ICON_FONT:$font_size"
      icon.width="$APP_WIDTH"
      icon="$icon"
    )
    sketchy_add_item "$item" left \
      --move "$item" before "workspace.end.$sid" \
      --set "$item" "${props[@]}" \
      click_script="aerospace workspace $sid"
    
    # for default item, use spaceid as window_id
    sketchy_highlight_window_id "$sid"
  fi
}

maybe_remove_default_item_from_spaceid() {
  local sid="$1"
  local items=$(sketchy_get_window_items_in_spaceid "$sid")
  local item_count=$(echo "$items" | wc -w | tr -d ' ')
  if [[ "$items" == *"window.$sid.$sid.default"* ]] && [[ "$item_count" -gt 1 ]]; then
    sketchy_remove_item "window.$sid.$sid.default"
  fi
}


aerospace_remove_window_id() {
  # ex: 46356
  local window_id="$1"
  local sid=$(aerospace_focused_workspace)
  # item ex:window.3.66286.WezTerm
  item=$(sketchy_get_item_by_window_id "$window_id")
  sketchy_remove_item "$item"

  # add default if no apps in workspace
  maybe_add_default_item_to_spaceid "$sid"
}


aerospace_new_window_id() {
  # ex: 46356
  local window_id="$1"
  local sid=$(aerospace_focused_workspace)

  # ex: Cursor
  appname=$(aerospace_appname_from_window_id "$window_id")

  icon="$($CONFIG_DIR/icons_apps.sh "$appname")"
  icon_color="$(get_workspace_foreground $sid)"
  item="window.$sid.$window_id.$appname"
  props=(
    background.corner_radius=0
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
    icon.width="$APP_WIDTH"
  )
  sketchy_add_item "$item" left \
    --move "$item" before "workspace.end.$sid" \
    --set "$item" "${props[@]}" \
    icon="$icon" icon.color="$icon_color" \
    click_script="aerospace focus --window-id $window_id"

   # remove default if it exists
  maybe_remove_default_item_from_spaceid "$sid"
  sketchy_highlight_window_id "$window_id"
}

aerospace_add_apps_in_spaceid() {
  local sid="$1"

  props=(
    y_offset=1
    background.corner_radius=0
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
    icon.width="$APP_WIDTH"
  )

  aerospace_window_ids=$(aerospace_window_ids_in_workspace "$sid")

  if [ -n "${aerospace_window_ids}" ]; then
    # Read space-separated window_ids into an array and iterate
    read -ra window_id_array <<< "$aerospace_window_ids"
    for window_id in "${window_id_array[@]}"; do
      appname=$(aerospace_appname_from_window_id "$window_id")
      icon="$($CONFIG_DIR/icons_apps.sh "$appname")"
      icon_color="$(get_workspace_foreground $sid)"

      # only add if doesn't already exist
      item="window.$sid.$window_id.$appname"
      sketchy_add_item "$item" left \
        --move "$item" before "workspace.end.$sid" \
        --set "$item" "${props[@]}" \
        icon="$icon" icon.color="$icon_color" \
        click_script="aerospace focus --window-id $window_id"
    done
  else
    maybe_add_default_item_to_spaceid "$sid"
  fi
}

