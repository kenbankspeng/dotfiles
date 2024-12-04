#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"

props=(
	icon=$APPLE_LOGO
	icon.font="$ICON_FONT:18"
	icon.color="$SKY"
	padding_left=10
	script="$PLUGIN_DIR/apple.sh"
)

sketchybar --add item apple.logo right \
	--set apple.logo "${props[@]}" \
	--subscribe apple.logo mouse.clicked
