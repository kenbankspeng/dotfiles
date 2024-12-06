#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"

sketchy_add item volume right \
  --set volume script="$PLUGIN_DIR/volume.sh" \
  --subscribe volume volume_change mouse.clicked
