#!/bin/bash

# ip address
sketchybar --add item ip_address right \
	--set ip_address script="$PLUGIN_DIR/wifi.sh" \
	update_freq=30 \
	--subscribe ip_address wifi_change

# wifi alias
props=(
	update_freq=30
	icon.drawing=off
	label.drawing=off
	width=28
	script="$PLUGIN_DIR/wifi.sh"
)
sketchybar --add alias "Control Center,WiFi" right \
	--rename "Control Center,WiFi" wifi_alias \
	--set wifi_alias icon.drawing=on ${props[@]} \
	--subscribe wifi_alias wifi_change
