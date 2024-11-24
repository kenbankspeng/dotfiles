#!/usr/bin/env bash

sketchybar --add item volume left \
  --set volume script="$PLUGIN_DIR/volume.sh" \
  --subscribe volume volume_change
