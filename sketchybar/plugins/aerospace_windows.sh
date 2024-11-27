#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"

if [ "$SENDER" = "aerospace_workspace_change" ]; then

  for sid in $(aerospace_workspaces); do
    map=$(aerospace_space_window_map | jq --arg space "$sid" '.[] | select(.workspace == $space)')
    appid=$(echo "$map" | jq -r '.["app-name"]')

    # if [ "$space_number" = "$CURRENT_SPACE" ]; then
    icon_strip="—"
    if [ -n "${appid}" ]; then
      icon_strip=""
      while read -r app; do
        icon="$($CONFIG_DIR/icon_map.sh "$appid")"
        icon_strip+="$icon "
      done <<<"${appid}"
    fi

    echo "@@ $icon_strip"

    props=(
      icon="$sid"
      label="$icon_strip"
      label.font="$ICON_FONT:$ICON_FONTSIZE"
    )

    sketchybar --set space.$sid icon="$sid" label="$icon_strip"

    # fi
  done

fi
