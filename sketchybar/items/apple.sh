#!/usr/bin/env bash

props=(
	icon="􀣺"
	icon.font="sketchybar-app-font:Regular:17"
	icon.color="$SKY"
)

sketchybar --add item apple.logo left \
	--set apple.logo "${props[@]}"
