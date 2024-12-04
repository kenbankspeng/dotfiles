#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"

percentage=$(pmset -g batt | grep -Eo "\d+%" | cut -d% -f1)
charging=$(pmset -g batt | grep 'AC Power')

if [ $percentage = "" ]; then
  exit 0
fi

case ${percentage} in
9[0-9] | 100)
  icon=$BATTERY_4 # full
  ;;
[6-8][0-9])
  icon=$BATTERY_3 # strong
  ;;
[3-5][0-9])
  icon=$BATTERY_2 # half
  ;;
[1-2][0-9])
  icon=$BATTERY_1 # low
  ;;
*) icon=$BATTERY_0 ;; # empty
esac

if [[ $charging != "" ]]; then
  icon=$BATTERY_CHARGING
fi

props=(
  icon=$icon
  icon.color=$SKY
  label="${percentage}%"
  label.color=$SKY
  background.height=$ITEM_HEIGHT_WITH_LABEL
)
sketchybar --set $NAME "${props[@]}"

if [ "$SENDER" = "mouse.clicked" ]; then
  open "x-apple.systempreferences:com.apple.Battery-Settings.extension"
fi
