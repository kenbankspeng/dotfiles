#!/usr/bin/env bash

if [ "$SENDER" = "space_windows_change" ]; then
  space=$(echo "$INFO" | jq -r '.space')
  apps="$(echo "$INFO" | jq -r '.apps | keys[]')"

  label="-"
  if [ -n "$apps" ] && [ "$space" != "null" ]; then
    label=""
    while read -r app; do
      icon="$($CONFIG_DIR/plugins/icon_map.sh "$app")"
      label+="$icon"
    done <<<"${apps}"
  fi

  if [ -n "$space" ]; then
    sketchybar --set space.$space \
      icon="$space" \
      label="$label" \
      padding_left=10 \
      padding_right=10 \
      icon.padding_left=10 \
      icon.padding_right=4 \
      label.padding_left=4 \
      label.padding_right=10 \
      icon.font="SF Pro:Semibold:14"
  fi

fi
