#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

cpuload="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"

props=(
  label="$cpuload"
)

if [ -n "$cpuload" ]; then
  sketchybar -m --set "$NAME" "${props[@]}"
fi
  
if [ "$SENDER" = "mouse.clicked" ]; then
  open -a "Activity Monitor"
fi
