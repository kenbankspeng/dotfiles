#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

percentage=$(df -H ~ | grep -E '^(/dev/).' | awk '{ printf ("%s\n", $5) }')

sketchybar -m --set "$NAME" label="$percentage"

if [ "$SENDER" = "mouse.clicked" ]; then
  open -a "DaisyDisk"
fi
