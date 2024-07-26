#!/usr/bin/env bash

source "$CONFIG_DIR/plugins/helpers/yabai.sh"

# get the num from space.<num>
index=$(echo "$NAME" | awk -F. '{print $2}')

# helper to modify alpha of a 0xaarrggbb color
alpha() {
  local color=$1
  local new_alpha=$2
  local rgb_part=${color:4}
  echo 0x${new_alpha}${rgb_part} # new color
}

update() {
  # The $SELECTED variable is available for space components

  source "$CONFIG_DIR/colors.sh"
  # space.index: for index 1 to 10, accent is ACCENT($index)
  accent=$(eval echo \$ACCENT$index)

  if [ "$SELECTED" = true ]; then
    border=$(alpha "$accent" 80) # 80 hex
    bg=$(alpha "$accent" 40)     # 40 hex
  else
    border=$TRANSPARENT
    bg=$TRANSPARENT
  fi

  props=(
    background.color=$bg
    background.border_width=1
    background.border_color=$border
    label.color=$accent
    icon.color=$accent
  )
  sketchybar --set "$NAME" "${props[@]}"
}

if [ "$BUTTON" == "left" ]; then
  if [ "$SELECTED" == "false" ]; then
    yabai -m space --focus "$index"
  else
    if [ "$(space_type "$index")" == "stack" ]; then
      first_window=$(first_window "$index")
      last_window=$(last_window "$index")
      yabai -m window "$first_window" --stack "$last_window"
    fi
  fi
elif [ "$BUTTON" == "right" ]; then
  toggle_layout "$index"
else
  update
fi
