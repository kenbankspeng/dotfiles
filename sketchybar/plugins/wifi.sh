#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

# When switching between devices, it's possible to get hit with multiple
# concurrent events, some of which may occur before `scutil` picks up the
# changes, resulting in race conditions.
sleep 1

services=$(networksetup -listnetworkserviceorder)
device=$(scutil --nwi | awk '/Network interfaces:/ {print $3}')

# echo "@@ services: $services"
# echo "@@ device: $device"

icon=$NET_OFF
color=$off

if [ -n "$device" ]; then
  service=$(echo "$services" | sed -n "s/.*Hardware Port: \([^,]*\), Device: $device.*/\1/p")
  # echo "@@ service: $service"

  case $service in
  "iPhone USB")
    icon=$NET_USB
    color=$on
    ;;
  "Thunderbolt Bridge")
    icon=$NET_THUNDERBOLT
    color=$on
    ;;
  "Wi-Fi")
    airportnetwork=$(networksetup -getairportnetwork "$device")
    ssid=$(echo $airportnetwork | sed -n 's/Current Wi-Fi Network: \(.*\)/\1/p')
    # echo "@@ ssid: $ssid"

    if [[ $ssid == *iPhone* ]]; then
      icon=$NET_HOTSPOT
      color=$on
    else
      status=$(networksetup -getairportpower "$device" | awk '{print $NF}')
      # echo "@@ status: $status"
      if [[ "$status" == "On" ]]; then
        RSSI=$(sudo wdutil info | rg --only-matching 'RSSI.*?(-?\d+)' -r '$1')
        if ((RSSI >= -50 && RSSI <= -30)); then
          icon=$NET_WIFI_3 # High signal
        elif ((RSSI >= -70 && RSSI <= -51)); then
          icon=$NET_WIFI_2 # Medium signal
        else
          icon=$NET_WIFI_1 # Low signal
        fi
        color=$on
      fi
    fi
    ;;

  esac
fi
# echo "@@ color: $color"
# echo "@@ icon: $icon"

props=(
  icon.font="Icomoon:Regular:20"
  icon="$icon"
  icon.color="$color"
)
sketchybar --set $NAME "${props[@]}"
