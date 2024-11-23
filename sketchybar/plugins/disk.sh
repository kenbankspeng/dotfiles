#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

props=(

  label="$(df -H ~ | grep -E '^(/dev/).' | awk '{ printf ("%s\n", $5) }')"
  label.color=$SAPPHIRE
  icon.padding_left=8 # fine tuning hack
)
sketchybar -m --set "$NAME" "${props[@]}"
