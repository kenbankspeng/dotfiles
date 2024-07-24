#!/bin/bash

mouse_click() {
	sketchybar --set $NAME label="Mise"
	prev=$(cat /tmp/mise_count)
	sleep 2
	sketchybar --set $NAME label="$prev"
}

update() {
	source "$CONFIG_DIR/colors.sh"

	count=$(mise outdated | wc -l)
	if [ -n "$count" ]; then count=$(echo $((count - 1))); fi
	sleep 10

	case "$count" in
	0)
		echo "case: 0"
		color=$GREEN
		count=􀆅
		;;
	[1-2])
		echo "case: 1-2"
		color=$YELLOW
		;;
	[3-4])
		echo "case: 3-4"
		color=$ORANGE
		;;
	*)
		echo "case: *"
		color=$RED
		;;
	esac

	props=(
		label="$count"
		icon.color="$color"
		label.color="$color"
	)
	sketchybar --set "$NAME" "${props[@]}"

	echo "count: $count"
	echo $count >/tmp/mise_count
}

case "$SENDER" in
"mouse.clicked")
	mouse_click
	;;
*)
	update
	;;
esac
