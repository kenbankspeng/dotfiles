#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

cpuload="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"

props=(
  icon="$ICON_CPU"
  icon.color="$SAPPHIRE"
  icon.font="$FONT:$((ICON_FONTSIZE+4))"
  label.drawing=on
  label="$cpuload"
  label.color="$SAPPHIRE"
  background.padding_left=0
  background.padding_right=0
  icon.padding_left=0
  icon.padding_right=0
  label.padding_left=10
  label.padding_right=0
  label.width=36
  label.align=center
)

if [ -n "$cpuload" ]; then
  sketchybar -m --set "$NAME" "${props[@]}"
fi
  
if [ "$SENDER" = "mouse.clicked" ]; then
  open -a "Activity Monitor"
fi
