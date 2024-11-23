#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

percentage=$(pmset -g batt | grep -Eo "\d+%" | cut -d% -f1)
charging=$(pmset -g batt | grep 'AC Power')

if [ $percentage = "" ]; then
  exit 0
fi

case ${percentage} in
9[0-9] | 100)
  icon="􀛨"
  ;;
[6-8][0-9])
  icon="􀺸"
  ;;
[3-5][0-9])
  icon="􀺶"
  ;;
[1-2][0-9])
  icon="􀛩"
  ;;
*) icon="􀛪" ;;
esac

if [[ $charging != "" ]]; then
  icon="􀢋"
fi

props=(
  icon="$icon"
  icon.color=$SKY
  label="${percentage}%"
  label.color=$SKY
  background.height=$ITEM_HEIGHT_WITH_LABEL
)
sketchybar --set $NAME "${props[@]}"
