#!/bin/bash

sketchybar --add item ip_address right \
	--set ip_address script="$PLUGIN_DIR/wifi.sh" \
	update_freq=30 \
	--subscribe ip_address wifi_change

sketchybar --add alias "Control Center,WiFi" right \
	--rename "Control Center,WiFi" wifi_alias \
	--set wifi_alias icon.drawing=on \
	label.drawing=off \
	alias.color=$WHITE \
	padding_left=5 \
	background.padding_right=0 \
	background.padding_left=0 \
	width=28 \
	--subscribe wifi_alias wifi_change
