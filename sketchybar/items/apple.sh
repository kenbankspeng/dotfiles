#!/usr/bin/env bash

source "$CONFIG_DIR/colors.sh"

props=(
	icon="􀣺"
	icon.font="$SKETCHY_FONT:18"
	icon.color="$SKY"
)

sketchybar --add item apple.logo left \
	--set apple.logo "${props[@]}"
