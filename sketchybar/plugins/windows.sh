#!/usr/bin/env bash

source "$CONFIG_DIR/colors.sh"

props=(
  label.drawing=off
  icon.drawing=off
  padding_left=5
  padding_right=5
  icon.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE"
  icon.padding_left=2
  icon.padding_right=2
)

# Get dynamic window information grouped by space
query=$(yabai -m query --windows | jq '[group_by(.space)[] | {
    space: .[0].space,
    apps: [.[] | .app],
    has_focus: (map(select(.["has-focus"] == true).app) | if length > 0 then .[0] else false end)
}]')

# Create and update windows dynamically
echo $query | jq -c '.[]' | while IFS= read -r item; do
  sid=$(echo "$item" | jq '.space')
  apps=($(echo "$item" | jq -r '.apps[]'))

  # Allocate only needed items
  for ((wid = 0; wid < ${#apps[@]}; wid++)); do
    app=${apps[$wid]}
    icon="$($CONFIG_DIR/icon_map.sh "$app")"
    sketchybar --add item window.$sid.$wid left \
      --set window.$sid.$wid "${props[@]}" icon.drawing=on icon="$icon"
  done

  # Remove any excess items dynamically
  wid=${#apps[@]}
  while true; do
    if sketchybar --query window.$sid.$wid &>/dev/null; then
      sketchybar --remove window.$sid.$wid
      ((wid++))
    else
      break
    fi
  done
done
