#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

for sid in $(aerospace_workspaces); do
  apps_list=$(aerospace_space_window_map | jq --arg space "$sid" '.[] | select(.workspace == $space)' | jq -r '.["app-name"]')

  icon_strip="—"
  if [ -n "${apps_list}" ]; then
    icon_strip=""
    while read -r app; do
      icon="$($CONFIG_DIR/icon_map.sh "$app")"
      icon_strip+="$icon "
    done <<<"${apps_list}"
  fi

  props=(
    icon="$sid"
    label="$icon_strip"
    label.font="$ICON_FONT:$ICON_FONTSIZE"
  )
  sketchy --add item aerospace.$sid left
  sketchybar --set aerospace.$sid icon="$sid" label="$icon_strip"

done

# for sid in $(aerospace_workspaces); do
#   props=(
#     icon="$sid"
#     script="$PLUGIN_DIR/aerospace_space.sh $sid"
#   )
#   sketchybar --add item space.$sid left \
#     --set space.$sid "${props[@]}" \
#     --subscribe space.$sid mouse.clicked
# done

# if [ "$1" = "$FOCUSED_WORKSPACE" ]; then
#   sketchybar --set $NAME background.drawing=on
# else
#   sketchybar --set $NAME background.drawing=on
# fi
