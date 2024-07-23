#!/usr/bin/env bash
cpu="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"
if [ -n "$cpu" ]; then
  sketchybar -m --set "$NAME" \
    label="$cpu" \
    label.font="SF Pro:Semibold:12"
fi
