#!/usr/bin/env bash

# network

sketchybar --add item ip_address right \
  --set ip_address script="$PLUGIN_DIR/ip_address.sh" \
  update_freq=30 \
  --subscribe ip_address wifi_change
