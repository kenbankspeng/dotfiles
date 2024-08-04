#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

ipaddress=$(scutil --nwi | grep address | sed 's/.*://' | tr -d ' ' | head -1)

if [[ $ipaddress != "" ]]; then
  color=$GREEN
else
  color=$RED
fi

local props=(
  padding_left=0
  padding_right=0
  icon.drawing=off
  label.drawing=off
  alias.color="$color"
)
# update wifi_alias
sketchybar --set wifi_alias ${props[@]}
