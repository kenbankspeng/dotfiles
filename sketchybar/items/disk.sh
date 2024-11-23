#!/usr/bin/env bash

sketchybar --add item disk left \
  --set disk update_freq=2 \
  script="$PLUGIN_DIR/disk.sh"
