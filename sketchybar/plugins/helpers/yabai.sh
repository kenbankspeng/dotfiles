# $1 : space index
space_type() {
  spaces=$(yabai -m query --spaces "index,type")
  type=$(echo "$spaces" | jq -r ".[] | select(.index == $1) | .type")
  echo "$type"
}

# do first_window ourselves
# $1 : space index
first_window() {
  spaces=$(yabai -m query --spaces)
  first_window=$(echo "$spaces" | jq -r ".[] | select(.index == $1) | .windows[0]")
  echo "$first_window"
}

# do last_window ourselves, since yabai field is buggy
# $1 : space index
last_window() {
  spaces=$(yabai -m query --spaces)
  last_window=$(echo "$spaces" | jq -r ".[] | select(.index == $1) | .windows[-1]")
  echo "$last_window"
}

toggle_layout() {
  type=$(space_type "$1")
  if [ "$type" == "bsp" ]; then
    yabai -m space "$1" --layout stack
  else
    yabai -m space "$1" --layout bsp
  fi

  # hack bug workaround
  islast=$(yabai -m query --spaces | jq '.[-1]."has-focus" == true')
  echo "islast: $islast"
  if [ "$islast" == "true" ]; then
    yabai -m space --focus prev
    sleep 0.1
    yabai -m space --focus next
  else
    yabai -m space --focus next
    sleep 0.1
    yabai -m space --focus prev
  fi
}
