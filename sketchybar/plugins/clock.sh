#!/usr/bin/env bash

sketchybar --set $NAME label="$(date "+%-l:%M%P" | tr "[:upper:]" "[:lower:]")"
