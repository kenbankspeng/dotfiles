#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"

props=(
	icon=$ICON_LEGO
	background.height=$ITEM_HEIGHT_WITH_LABEL
	update_freq=$((60 * 60)) # once per hour
	script="$PLUGIN_DIR/outdated.sh"
)
sketchy_add event outdated_update \
	--add item outdated right \
	--set outdated "${props[@]}" \
	--subscribe outdated outdated_update mouse.clicked
