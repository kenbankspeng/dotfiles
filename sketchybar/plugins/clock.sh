#!/usr/bin/env bash

datetime=$(date +"%-I:%M %p")
time=$(echo "$datetime" | awk '{print $1}')
period=$(echo "$datetime" | awk '{print $2}')

sketchybar --set $NAME icon=$time label=$period

if [ "$SENDER" = "mouse.clicked" ]; then
  open "x-apple.systempreferences:com.apple.preferences.datetime"
fi
