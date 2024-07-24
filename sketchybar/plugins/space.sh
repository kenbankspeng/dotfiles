#!/usr/bin/env bash

# modify alpha of a 0xaarrggbb color
alpha() {
  local color=$1
  local new_alpha=$2

  # Extract the remaining part of the color (rrggbb)
  local rgb_part=${color:4}

  echo 0x${new_alpha}${rgb_part} # new color
}

# Example usage
original_color=0xff123456
new_alpha=80

new_color=$(change_alpha $original_color $new_alpha)

# The $SELECTED variable is available for space components

source "$CONFIG_DIR/colors.sh"

# space.index: for index 1 to 10, accent is ACCENT($index)
index=$(echo "$NAME" | awk -F. '{print $2}')
accent=$(eval echo \$ACCENT$index)

if [ $SELECTED = true ]; then
  border=$(alpha $accent 80) # 80 hex
  bg=$(alpha $accent 40)     # 40 hex
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
sketchybar --set $NAME "${props[@]}"
