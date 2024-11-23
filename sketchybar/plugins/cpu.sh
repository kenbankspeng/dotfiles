#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

cpu="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"

props=(
  icon=􀧓
  icon.color=$SAPPHIRE
  label="$cpu"
  label.color=$SAPPHIRE
)

if [ -n "$cpu" ]; then
  sketchybar -m --set "$NAME" "${props[@]}"
fi
