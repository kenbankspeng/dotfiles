#!/bin/bash

source "$CONFIG_DIR/env.sh"

# reprocess on mouse click
sketchybar --set "$NAME" label=Check icon.color="$BLUE"

count=$(mise list | grep -o '\boutdated\b' | wc -l | tr -d '[:space:]')
sleep 3

count="$(brew outdated | wc -l | tr -d ' ')"
sleep 10

case "$count" in
0)
	color=$GREEN
	count=􀆅
	;;
[1-2])
	color=$YELLOW
	;;
[3-4])
	color=$ORANGE
	;;
*)
	color=$RED
	;;
esac

props=(
	label="$count"
	icon.color="$color"
	label.color="$color"
	icon.padding_left=8    # fine tuning hack
	label.padding_left=-19 # fine tuning hack
)
sketchybar --set "$NAME" "${props[@]}"
