#!/bin/bash

# wifi alias
props=(
	update_freq=30
	icon.drawing=off
	label.drawing=off
	script="$PLUGIN_DIR/wifi.sh"
)
sketchybar --add alias "Control Center,WiFi" left \
	--rename "Control Center,WiFi" wifi_alias \
	--set wifi_alias icon.drawing=on ${props[@]} \
	--subscribe wifi_alias wifi_change
