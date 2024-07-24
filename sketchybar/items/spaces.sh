#!/usr/bin/env bash

SPACE_ICONS=("1" "2" "3" "4" "5" "6" "7" "8" "9" "10")

sid=0
spaces=()
for i in "${!SPACE_ICONS[@]}"; do
  sid=$(($i + 1))

  space=(
    space="$sid"
    icon="${SPACE_ICONS[i]}"
    icon.padding_left=10
    icon.padding_right=10
    padding_left=2
    padding_right=2
    label.padding_right=20
    label.font="sketchybar-app-font:Regular:16"
    script="$PLUGIN_DIR/space.sh"
  )

  sketchybar --add space space.$sid left \
    --set space.$sid "${space[@]}"
done

sketchybar --add item space_creator left \
  --set space_creator \
  script="$PLUGIN_DIR/space_windows.sh" \
  --subscribe space_creator space_windows_change
