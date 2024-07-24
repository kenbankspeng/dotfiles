#!/usr/bin/env bash

source "$CONFIG_DIR/colors.sh"

cpu="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"

props=(
  icon=􀧓
  icon.color=$SAPPHIRE
  label="$cpu"
  label.font="$FONT:12"
  label.color=$SAPPHIRE
)

if [ -n "$cpu" ]; then
  sketchybar -m --set "$NAME" "${props[@]}"
fi
