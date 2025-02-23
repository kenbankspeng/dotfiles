#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

location="right"

sketchy_add_item cpu "$location" \
  --set cpu update_freq=2 \
  script="$PLUGIN_DIR/cpu.sh" \
  --subscribe cpu mouse.clicked
