#!/bin/sh

source "$CONFIG_DIR/colors.sh" # Loads all defined colors

IP_ADDRESS=$(scutil --nwi | grep address | sed 's/.*://' | tr -d ' ' | head -1)
IS_VPN=$(scutil --nwi | grep -m1 'utun' | awk '{ print $1 }')

if [[ $IS_VPN != "" ]]; then
  color=$ACCENT1
  icon="􀎠"
  label="VPN"
elif [[ $IP_ADDRESS != "" ]]; then
  color=$BLUE
  icon="􀙇"
  label=$IP_ADDRESS
else
  color=$RED
  icon="􀙥"
  label="Not Connected"
fi

sketchybar --set $NAME \
  icon=$icon \
  label="$label" \
  icon.color=$color \
  label.color=$color \
  label.font="SF Pro:Semibold:12"
