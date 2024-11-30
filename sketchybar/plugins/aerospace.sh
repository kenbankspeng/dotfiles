#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

# default to 1
SELECTED=${FOCUSED_WORKSPACE:-1}

# echo $SENDER

cache_all_workspace_apps

sketchy_add item divider.first left \
  --set divider.first background.height=1 \
  background.color=$LAVENDER

for sid in $(aerospace_workspaces); do

  apps_list=$(aerospace_apps_in_space $sid)

  # remove apps from cache if they exist
  for app in $apps_list; do
    if [ -n "$app" ] && find_workspace_app "$sid" "$app" >/dev/null; then
      remove_workspace_app "$sid" "$app"
    fi
  done

  if [ "$sid" = "$SELECTED" ]; then
    color=$SURFACE1
  else
    color=$TRANSPARENT
  fi

  props=(
    y_offset=1
    background.corner_radius=0
    background.color=$color
    background.height=$ITEM_HEIGHT
    label.drawing=off
    icon.font="$ICON_FONT:$ICON_FONTSIZE"
  )

  if [ -n "${apps_list}" ]; then
    app_index=0
    while read -r app; do
      ((app_index++))
      icon="$($CONFIG_DIR/icon_map.sh "$app")"
      sketchy_add item aerospace.$sid.$app_index left # sketchy only adds if doesn't already exist
      sketchybar --set aerospace.$sid.$app_index "${props[@]}" icon=$icon
    done <<<"${apps_list}" # app_list has one app per line
  else

    sketchy_add item aerospace.$sid.1 left # sketchy only adds if doesn't already exist
    sketchybar --set aerospace.$sid.1 "${props[@]}" icon="-"
  fi
  sketchy_add item divider.$sid left \
    --set divider.$sid background.height=1 \
    background.color=$LAVENDER

done

# sketchy_remove aerospace.$sid.$app
echo $(get_cache)

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
