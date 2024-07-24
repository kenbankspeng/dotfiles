#!/usr/bin/env bash

source "$CONFIG_DIR/colors.sh"

ipaddress=$(scutil --nwi | grep address | sed 's/.*://' | tr -d ' ' | head -1)
isVpn=$(scutil --nwi | grep -m1 'utun' | awk '{ print $1 }')

if [[ $isVpn != "" ]]; then
  bg=$BLUE
  color=$BLACK
  icon="􀎠"
  text="VPN"
elif [[ $ipaddress != "" ]]; then
  bg=$BLACK
  color=$BLUE
  icon="􀙇"
  text=$ipaddress
else
  bg=$BLACK
  color=$RED
  icon="􀙥"
  text="Not Connected"
fi

sketchybar --set $NAME \
  icon=$icon \
  label="$text" \
  icon.color=$color \
  label.color=$color \
  label.font="$FONT:12" \
  background.color=$bg
