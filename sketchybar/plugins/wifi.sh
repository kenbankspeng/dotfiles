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
  text="Not Connected"
fi

props=(
  background.padding_left=0
  background.padding_right=0
  label.padding_left=0
  label.padding_right=0
  icon.padding_left=0
  icon.padding_right=0
  label="$text"
  label.color=$color
  label.font="$FONT:12"
  background.color=$bg
)
sketchybar --set $NAME "${props[@]}"
