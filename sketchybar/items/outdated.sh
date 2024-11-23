#!/bin/bash

props=(
	icon=􀐛
	script="$PLUGIN_DIR/outdated.sh"
	update_freq=$((1 * 60 * 60)) # once per hour
	icon.padding_left=11         # fine tuning hack
)
sketchybar --add event outdated_update \
	--add item outdated left \
	--set outdated "${props[@]}" \
	--subscribe outdated outdated_update mouse.clicked
