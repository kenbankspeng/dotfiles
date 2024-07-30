#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

ipaddress=$(scutil --nwi | grep address | sed 's/.*://' | tr -d ' ' | head -1)
isVpn=$(scutil --nwi | grep -m1 'utun' | awk '{ print $1 }')

if [[ $isVpn != "" ]]; then
  color=$MAROON
  text="VPN"
elif [[ $ipaddress != "" ]]; then
  color=$GREEN
  text=$ipaddress
else
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

# update wifi_alias and ip_address
sketchybar --set wifi_alias alias.color="$color"
sketchybar --set ip_address "${props[@]}"
