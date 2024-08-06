#!/bin/bash

position=q

props=(
	icon=􀐛
	padding_right=10
	padding_left=0
	script="$PLUGIN_DIR/mise.sh"
	update_freq=$((60 * 60)) # once per hour
)
sketchybar --add event mise_update \
	--add item mise $position \
	--set mise "${props[@]}" \
	--subscribe mise mise_update mouse.clicked
