#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"

sketchy_add item cpu right \
  --set cpu update_freq=2 \
  script="$PLUGIN_DIR/cpu.sh" \
  --subscribe cpu mouse.clicked
