#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

props=(
  script="$PLUGIN_DIR/battery.sh"
  update_freq=120
  icon.color="$SKY"
  label.drawing=on
  label.color="$SKY"
  label.width=40
)

sketchy_add_item battery "$location" \
  --set battery "${props[@]}" \
  --subscribe battery system_woke power_source_change mouse.clicked
