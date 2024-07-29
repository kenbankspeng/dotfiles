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
    padding_left=5
    padding_right=5
    label.padding_left=0
    label.padding_right=12
    label.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE"
    icon.font="$FONT:$FONTSIZE"
    script="$PLUGIN_DIR/space.sh"
  )
  sketchybar --add space space.$sid left \
    --set space.$sid "${space[@]}" \
    --subscribe space.$sid mouse.clicked
done

# reconstruct the bar when a window changes
sketchybar --add item space_windows left \
  --set space_windows \
  script="$PLUGIN_DIR/space_windows.sh" \
  --subscribe space_windows space_windows_change
# front_app_switched

# TODO: brackets
sketchybar --add bracket spaces '/space\..*/' \
  --set spaces background.color=red
