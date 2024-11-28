#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

# $FOCUSED_WORKSPACE

MAX_APPS=6 # max per workspace

for sid in $(aerospace_workspaces); do

  for ((loop_index = 1; loop_index <= MAX_APPS; loop_index++)); do
    sketchy_remove aerospace.$sid.$loop_index
  done

  apps_list=$(aerospace_space_window_map | jq --arg space "$sid" '.[] | select(.workspace == $space)' | jq -r '.["app-name"]')

  icon_strip="—"
  if [ -n "${apps_list}" ]; then
    icon_strip=""
    app_index=0
    while read -r app; do
      ((app_index++))

      props=(
        background.height=$ITEM_HEIGHT
        label.drawing=off
        icon="$($CONFIG_DIR/icon_map.sh "$app")"
        icon.font="$ICON_FONT:$ICON_FONTSIZE"
      )
      sketchy_add item aerospace.$sid.$app_index left # sketchy only adds if doesn't already exist
      sketchybar --set aerospace.$sid.$app_index "${props[@]}"
    done <<<"${apps_list}" # app_list has one app per line

    if [ "$sid" != "$(aerospace_workspaces | tail -n 1)" ]; then
      sketchy_add item divider.$sid left \
        --set divider.$sid icon="—" padding_left=5 padding_right=5 \
        --set divider.$sid background.height=0 \
        --set divider.$sid background.corner_radius=4
    fi

  fi

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
