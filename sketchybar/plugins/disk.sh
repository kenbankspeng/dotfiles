#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

props=(
  icon=􀥾
  icon.color=$SAPPHIRE
  label="$(df -H ~ | grep -E '^(/dev/).' | awk '{ printf ("%s\n", $5) }')"
  label.color=$SAPPHIRE
  icon.padding_left=8    # fine tuning hack
  label.padding_left=-19 # fine tuning hack
)
sketchybar -m --set "$NAME" "${props[@]}"
