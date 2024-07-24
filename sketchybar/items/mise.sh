#!/bin/bash

# Trigger the brew_udpate event when brew update or upgrade is run from cmdline
# e.g. via function in .zshrc

props=(
	icon=􀐛
	label=Mise
	icon.color="$BLUE"
	padding_right=10
	padding_left=0
	script="$PLUGIN_DIR/mise.sh"
)
sketchybar --add event mise_update \
	--add item mise right \
	--set mise "${props[@]}" \
	--subscribe mise mise_update mouse.clicked
