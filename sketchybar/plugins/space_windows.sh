#!/usr/bin/env bash

if [ "$SENDER" = "space_windows_change" ]; then
  space_number=$(echo "$INFO" | jq -r '.space')
  apps="$(echo "$INFO" | jq -r '.apps | keys[]')"

  icon_strip="—"
  if [ -n "${apps}" ]; then
    icon_strip=""
    while read -r app; do
      icon="$($CONFIG_DIR/icon_map.sh "$app")"
      icon_strip+="$icon "
    done <<<"${apps}"
  fi

  if [ -n "$space_number" ]; then
    sketchybar --set space.$space_number icon="$space_number" label="$icon_strip"
  fi

fi
