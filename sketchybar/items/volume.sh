#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

sketchy_add_item volume "$location" \
  --set volume script="$PLUGIN_DIR/volume.sh" \
  --subscribe volume volume_change mouse.clicked
