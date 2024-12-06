#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"

cpuload="$(top -l 2 | grep -E "^ICON_CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"

props=(
  icon=$ICON_CPU
  icon.color=$SAPPHIRE
  label="$cpuload"
  label.color=$SAPPHIRE
  background.height=$ITEM_HEIGHT_WITH_LABEL
)

if [ -n "$cpuload" ]; then
  sketchybar -m --set "$NAME" "${props[@]}"
fi

if [ "$SENDER" = "mouse.clicked" ]; then
  open -a "Activity Monitor"
fi
