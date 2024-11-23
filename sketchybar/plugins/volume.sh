#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

# The volume_change event supplies a $INFO variable in which the current volume
# percentage is passed to the script.

if [ "$SENDER" = "volume_change" ]; then
  volume=$INFO

  case $volume in
  [6-9][0-9] | 100)
    icon="􀊩"
    ;;
  [3-5][0-9])
    icon="􀊥"
    ;;
  [1-9] | [1-2][0-9])
    icon="􀊡"
    ;;
  *) icon="􀊣" ;;
  esac

  props=(
    icon="$icon"
    icon.color=$LAVENDER
    label="$volume%"
    label.color=$LAVENDER
    icon.padding_left=8    # fine tuning hack
    label.padding_left=-23 # fine tuning hack
  )
  sketchybar --set $NAME "${props[@]}"
fi
