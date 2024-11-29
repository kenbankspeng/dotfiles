#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

# $FOCUSED_WORKSPACE

echo $SENDER

cache_all_workspace_apps

for sid in $(aerospace_workspaces); do

  apps_list=$(aerospace_apps_in_space $sid)

  while read -r app; do
    # onto next line if app is empty
    [ -z "$app" ] && continue

    found=$(find_workspace_app $sid $app)
    if [ "$found" = true ]; then
      echo "found $app in $sid"
      # strike it from the cache to not double count
      remove_workspace_app $sid $app1
    else
      echo "not found $app in $sid"
      sketchy_remove aerospace.$sid.$app
    fi
  done <<<"${apps_list}" # app_list has one app per line

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
