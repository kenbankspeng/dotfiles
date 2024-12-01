#!/usr/bin/env zsh

datetime=$(date +"%-I:%M %p")
time=$(echo "$datetime" | awk '{print $1}')
period=$(echo "$datetime" | awk '{print $2}')

sketchybar --set $NAME icon=$time label=$period
