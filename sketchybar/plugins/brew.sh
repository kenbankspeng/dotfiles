#!/bin/bash

source "$CONFIG_DIR/env.sh"

# reprocess on mouse click
sketchybar --set "$NAME" label=Brew icon.color="$BLUE"

count="$(brew outdated | wc -l | tr -d ' ')"
sleep 10

echo "count $count"

case "$count" in
0)
	color=$GREEN
	count=􀆅
	;;
[1-3])
	color=$YELLOW
	;;
*)
	color=$RED
	;;
esac

props=(
	label="$count"
	icon.color="$color"
	label.color="$color"
)

sketchybar --set "$NAME" "${props[@]}"
