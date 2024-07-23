#!/usr/bin/env bash

sketchybar -m --set "$NAME" label="$(top -l 2 | grep -E "^CPU" | tail -1 | awk '{ print int($3 + $5 + 0.5)"%" }')"
