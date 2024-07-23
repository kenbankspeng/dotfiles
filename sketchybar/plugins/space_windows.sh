#!/usr/bin/env bash

SPACE_DIR="/tmp/spaces"

# Ensure the directory for space files exists
mkdir -p "$SPACE_DIR"

if [ "$SENDER" = "space_windows_change" ]; then
  space=$(echo "$INFO" | jq -r '.space')
  echo "$INFO" >"$SPACE_DIR/space_$space.json"
elif [ "$SENDER" = "front_app_switched" ]; then
  frontapp=$INFO

  space_info=()
  for file in "$SPACE_DIR"/*; do
    if [ -f "$file" ]; then
      space_info+=("$(cat "$file")")
    fi
  done

  for info in "${space_info[@]}"; do
    space="$(echo "$info" | jq -r '.space')"
    apps="$(echo "$info" | jq -r '.apps | keys[]')"

    label="-"
    front=""
    if [ -n "$apps" ] && [ "$space" != "null" ]; then
      label=""
      while read -r app; do
        icon="$($CONFIG_DIR/plugins/map_icon.sh "$app")"
        if [ "$app" = "$frontapp" ]; then
          front="$icon$($CONFIG_DIR/plugins/map_app.sh "$app")"
        else
          label+="$icon"
        fi
      done <<<"${apps}"
    fi

    if [ -n "$space" ]; then
      sketchybar --set space.$space icon="$space" label="$label$front"
    fi

  done
fi
