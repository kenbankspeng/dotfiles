#!/usr/bin/env bash

if [ "$SENDER" = "space_windows_change" ]; then
  space=$(echo "$INFO" | jq -r '.space')
  apps="$(echo "$INFO" | jq -r '.apps | keys[]')"

  icon_strip="-"
  if [ -n "${apps}" ]; then
    icon_strip=""
    while read -r app; do
      icon="$($CONFIG_DIR/icon_map.sh "$app")"
      icon_strip+="$icon"
    done <<<"${apps}"
  fi

  if [ -n "$space" ]; then
    sketchybar --set space.$space \
      icon="$space" \
      label="$icon_strip" \
      padding_left=10 \
      padding_right=10 \
      icon.padding_left=10 \
      icon.padding_right=4 \
      label.padding_left=4 \
      label.padding_right=10 \
      icon.font="SF Pro:Semibold:14"
  fi

fi
