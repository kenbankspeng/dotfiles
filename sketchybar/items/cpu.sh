#!/usr/bin/env bash

sketchybar --add item cpu right \
  --set cpu update_freq=2 \
  script="$PLUGIN_DIR/cpu.sh"
