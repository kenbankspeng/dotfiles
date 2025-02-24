#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

props=(
  script="$PLUGIN_DIR/wifi.sh"
  icon.font="$ICOMOON:20"
)

sketchy_add_item wifi "$location" \
  --set wifi "${props[@]}" \
  --subscribe wifi wifi_change mouse.clicked
