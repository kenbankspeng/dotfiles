#!/bin/bash
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
    if [ "${apps}" != "" ]; then
      label=""
      front=""
      while read -r app; do
        icon="$($CONFIG_DIR/plugins/icon_map_fn.sh "$app")"
        if [ "$app" = "$frontapp" ]; then
          front="$icon$app"
        else
          label+="$icon"
        fi
      done <<<"${apps}"
    fi

    sketchybar --set space.$space icon="$space" label="$label$front"
  done

fi
