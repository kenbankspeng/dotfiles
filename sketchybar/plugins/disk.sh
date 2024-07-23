#!/usr/bin/env bash

sketchybar -m --set "$NAME" label="$(df -H ~ | grep -E '^(/dev/).' | awk '{ printf ("%s\n", $5) }')"
