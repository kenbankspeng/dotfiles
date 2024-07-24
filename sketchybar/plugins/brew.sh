#!/bin/bash

mouse_click() {
	sketchybar --set $NAME label="Brew"
	prev=$(cat /tmp/brew_count)
	sleep 10
	sketchybar --set $NAME label="$prev"
}

update() {
	source "$CONFIG_DIR/colors.sh"

	count="$(brew outdated | wc -l | tr -d ' ')"
	sleep 5

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
	)
	sketchybar --set "$NAME" "${props[@]}"

	echo $count >/tmp/brew_count
}

case "$SENDER" in
"mouse.clicked")
	mouse_click
	;;
*)
	update
	;;
esac
