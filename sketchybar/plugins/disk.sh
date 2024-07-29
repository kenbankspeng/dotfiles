#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

props=(
  icon=􀥾
  icon.color=$SAPPHIRE
  label="$(df -H ~ | grep -E '^(/dev/).' | awk '{ printf ("%s\n", $5) }')"
  label.color=$SAPPHIRE
  label.font="$FONT:12"
)
sketchybar -m --set "$NAME" "${props[@]}"
