#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

cpu="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"

props=(
  icon=􀧓
  icon.color=$SAPPHIRE
  label="$cpu"
  label.color=$SAPPHIRE
  background.height=$ITEM_HEIGHT_WITH_LABEL
)

if [ -n "$cpu" ]; then
  sketchybar -m --set "$NAME" "${props[@]}"
fi
