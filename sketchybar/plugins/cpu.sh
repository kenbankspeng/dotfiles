#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

cpuload="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"

props=(
  icon="$ICON_CPU"
  icon.color="$SAPPHIRE"
  icon.font="$FONT:$((ICON_FONTSIZE - 2))"
  label.drawing=on
  label="$cpuload"
  label.color="$SAPPHIRE"
  label.width=35
)

if [ -n "$cpuload" ]; then
  sketchybar -m --set "$NAME" "${props[@]}"
fi
  
if [ "$SENDER" = "mouse.clicked" ]; then
  open -a "Activity Monitor"
fi
