#!/usr/bin/env bash

# TODO: front_app_switched

query=$(yabai -m query --windows | jq '[group_by(.space)[] | {
    space: .[0].space,
    apps: [.[] | .app],
    has_focus: (map(select(.["has-focus"] == true).app) | if length > 0 then .[0] else false end)
}]')

wid=0
echo $query | jq -c '.[]' | while IFS= read -r item; do
  space=$(echo "$item" | jq '.space')
  apps=$(echo "$item" | jq -r '.apps[]')
  for app in $apps; do
    wid=$(($wid + 1))
    icon="$($CONFIG_DIR/icon_map.sh "$app")"
    sketchybar --set window.$wid icon="$icon"
  done
done
