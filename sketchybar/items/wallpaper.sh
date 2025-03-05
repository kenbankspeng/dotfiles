#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/sketchy.sh"

location="left"

props=(
	script="$PLUGIN_DIR/wallpaper.sh"
	update_freq=3600 # 1 hour
	icon="$ICON_APPLE_LOGO"
	icon.font="$ICON_FONT:18"
	icon.color="$SKY"
	background.padding_left=10
)

sketchy_add_item wallpaper "$location" \
	--set wallpaper "${props[@]}" \
	--subscribe wallpaper mouse.clicked
