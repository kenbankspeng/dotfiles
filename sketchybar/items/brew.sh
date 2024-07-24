#!/bin/bash

# Trigger the brew_udpate event when brew update or upgrade is run from cmdline
# e.g. via function in .zshrc

props=(
	icon=􀐛
	label=Brew
	icon.color="$BLUE"
	padding_right=10
	padding_left=0
	script="$PLUGIN_DIR/brew.sh"
)
sketchybar --add event brew_update \
	--add item brew right \
	--set brew "${props[@]}" \
	--subscribe brew brew_update
