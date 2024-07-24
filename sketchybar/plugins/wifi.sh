#!/usr/bin/env bash

source "$CONFIG_DIR/colors.sh"

ipaddress=$(scutil --nwi | grep address | sed 's/.*://' | tr -d ' ' | head -1)
isVpn=$(scutil --nwi | grep -m1 'utun' | awk '{ print $1 }')

if [[ $isVpn != "" ]]; then
  bg=$BLUE
  color=$BLACK
  text="VPN"
elif [[ $ipaddress != "" ]]; then
  bg=$BLACK
  color=$BLUE
  text=$ipaddress
else
  bg=$BLACK
  color=$RED
  text="— No WiFi —"
fi

props=(
  background.color=$bg
  background.padding_left=0
  background.padding_right=0
  icon.drawing=off
  label.align="left"
  label.padding_left=10
  label.padding_right=10
  label="$text"
  label.color=$color
  label.font="$FONT:12"
  width=75
)
sketchybar --set $NAME "${props[@]}"
