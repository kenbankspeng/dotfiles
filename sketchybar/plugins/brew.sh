#!/bin/bash

source "$CONFIG_DIR/colors.sh"

count="$(brew outdated | wc -l | tr -d ' ')"
sleep 5
color=$RED

case "$count" in
[3-5][0-9])
	color=$ORANGE
	;;
[1-2][0-9])
	color=$YELLOW
	;;
[1-9])
	color=$BLUE
	;;
0)
	color=$GREEN
	count=􀆅
	;;
esac

props=(
	label="$count"
	icon.color="$color"
	label.color="$color"
)
sketchybar --set "$NAME" "${props[@]}"
