#!/usr/bin/env bash

sketchybar -m --set "$NAME" \
  icon=􀥾 \
  label="$(df -H ~ | grep -E '^(/dev/).' | awk '{ printf ("%s\n", $5) }')" \
  label.font="SF Pro:Semibold:12"
