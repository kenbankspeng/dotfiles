#!/usr/bin/env bash

sketchybar --add item cpu right \
  --set cpu update_freq=2 \
  label.width=30 \
  script="$PLUGIN_DIR/cpu.sh"
