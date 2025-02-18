#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

sketchybar --add event update_outdated

props=(
	icon="$ICON_LEGO"
	label.drawing=on
	label.width=16
	update_freq="$((60 * 60))" # once per hour
	script="$PLUGIN_DIR/outdated.sh"
)
sketchy_add_item outdated right \
	--set outdated "${props[@]}" \
	--subscribe outdated update_outdated mouse.clicked
