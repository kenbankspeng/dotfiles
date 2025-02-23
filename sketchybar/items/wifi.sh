#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

sketchy_add_item wifi "$location" \
  --set wifi script="$PLUGIN_DIR/wifi.sh" \
  --subscribe wifi wifi_change mouse.clicked
