#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"

sketchy_add item wifi right \
  --set wifi script="$PLUGIN_DIR/wifi.sh" \
  --subscribe wifi wifi_change mouse.clicked
