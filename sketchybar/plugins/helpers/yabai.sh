# $1 : space index
space_type() {
  spaces=$(yabai -m query --spaces "index,type")

  if [ -n "$1" ]; then
    type=$(echo "$spaces" | jq -r ".[] | select(.index == $1) | .type")
  else
    type=$(echo "$spaces" | jq -r '.[] | select(.["has-focus"] == true) | .type')
  fi

  echo "$type"
}

# do first_window ourselves
# $1 : space index
first_window() {
  spaces=$(yabai -m query --spaces)

  if [ -n "$1" ]; then
    # $1 : space index
    first_window=$(echo "$spaces" | jq -r ".[] | select(.index == $1) | .windows[0]")
  else
    first_window=$(echo "$spaces" | jq -r '.[] | select(.["has-focus"] == true) | .windows[0]')
  fi

  echo "$first_window"
}

# do last_window ourselves, since yabai field is buggy
# $1 : space index
last_window() {
  spaces=$(yabai -m query --spaces)

  if [ -n "$1" ]; then
    # $1 : space index
    last_window=$(echo "$spaces" | jq -r ".[] | select(.index == $1) | .windows[-1]")
  else
    last_window=$(echo "$spaces" | jq -r '.[] | select(.["has-focus"] == true) | .windows[-1]')
  fi

  echo "$last_window"
}

toggle_layout() {
  type=$(space_type "$1")
  if [ "$type" == "bsp" ]; then
    if [ -n "$1" ]; then
      yabai -m space "$1" --layout stack
    else
      yabai -m space --layout stack
    fi
  else
    if [ -n "$1" ]; then
      yabai -m space "$1" --layout bsp
    else
      yabai -m space --layout bsp
    fi
  fi
}
