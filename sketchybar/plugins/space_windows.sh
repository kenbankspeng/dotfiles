#!/bin/bash

front = "1"
if [ "$SENDER" = "front_app_switched" ]; then
  front="$INFO"
fi

if [ "$SENDER" = "space_windows_change" ]; then
  space="$(echo "$INFO" | jq -r '.space')"
  apps="$(echo "$INFO" | jq -r '.apps | keys[]')"

  icon="—"
  if [ "${apps}" != "" ]; then
    while read -r app; do
      icon="$($CONFIG_DIR/plugins/icon_map_fn.sh "$app")"
    done <<<"${apps}"
  fi
  sketchybar --set space.$space icon="$space" label="$icon$front"
fi
