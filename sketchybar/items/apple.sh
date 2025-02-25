#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

location="left"

props=(
	script="$PLUGIN_DIR/apple.sh"
	update_freq=43200 # 12 hours
	icon="$ICON_APPLE_LOGO"
	icon.font="$ICON_FONT:18"
	icon.color="$SKY"
	background.padding_left=10
)

sketchy_add_item apple.logo "$location" \
	--set apple.logo "${props[@]}" \
	--subscribe apple.logo mouse.clicked
