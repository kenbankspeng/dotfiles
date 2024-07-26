#!/usr/bin/env bash

source "$CONFIG_DIR/colors.sh"

props=(
	icon="􀣺"
	icon.font="$SKETCHY_FONT:18"
	icon.color="$SKY"
	script="$PLUGIN_DIR/apple.sh"
)

sketchybar --add item apple.logo left \
	--set apple.logo "${props[@]}" \
	--subscribe apple.logo mouse.clicked
