#!/usr/bin/env bash

# network

sketchybar --add item ip_address right \
  --set ip_address script="$PLUGIN_DIR/ip_address.sh" \
  update_freq=30 \
  --subscribe ip_address wifi_change

# Bracket

sketchybar --add bracket status ip_address volume battery \
  --set status background.color=$BASE \
  background.border_color=$ACCENT3
