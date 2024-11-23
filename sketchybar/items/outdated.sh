#!/bin/bash

props=(
	icon=􀐛
	script="$PLUGIN_DIR/outdated.sh"
	update_freq=$((60 * 60)) # once per hour
)
sketchybar --add event outdated_update \
	--add item outdated left \
	--set outdated "${props[@]}" \
	--subscribe outdated outdated_update mouse.clicked
