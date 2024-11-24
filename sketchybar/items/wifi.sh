#!/usr/bin/env bash

sketchybar --add item wifi left \
  --set wifi script="$PLUGIN_DIR/wifi.sh" \
  --subscribe wifi volume_change
