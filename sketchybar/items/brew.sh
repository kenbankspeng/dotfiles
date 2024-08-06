#!/bin/bash

position=q

# Trigger the brew_udpate event when brew update or upgrade is run from cmdline
# e.g. via function in .zshrc

props=(
	icon=􀐛
	padding_right=10
	padding_left=0
	update_freq=$((60 * 60)) # once per hour
	script="$PLUGIN_DIR/brew.sh"
)
sketchybar --add event brew_update \
	--add item brew $position \
	--set brew "${props[@]}" \
	--subscribe brew brew_update mouse.clicked
