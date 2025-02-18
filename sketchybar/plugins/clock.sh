#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

datetime=$(date +"%-I:%M %p")
time=$(echo "$datetime" | awk '{print $1}')
period=$(echo "$datetime" | awk '{print tolower($2)}')

props=(
  label="$time$period"
)
sketchybar --set "$NAME" "${props[@]}"

if [ "$SENDER" = "mouse.clicked" ]; then
  open "x-apple.systempreferences:com.apple.preferences.datetime"
fi
