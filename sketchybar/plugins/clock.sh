#!/usr/bin/env bash

sketchybar --set $NAME label="$(
  date +"%-I:%M %p" | sed -e 's/AM/a/' -e 's/PM/p/'
)"
