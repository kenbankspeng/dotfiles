#!/usr/bin/env zsh

TMP_FILE="/tmp/yabai_layout_state"

get_next_layout() {
  local current_layout=$1

  case $current_layout in
  bsp) echo "stack" ;;
  stack) echo "float" ;;
  float) echo "bsp" ;;
  *) echo "bsp" ;; # Default to bsp if unknown layout
  esac
}

if [[ -n "$1" ]]; then
  # Execute yabai with the provided layout
  yabai -m space --layout "$1"
  echo "$1" >$TMP_FILE
else
  # Read the current layout from the tmp file or default to bsp
  if [[ -f $TMP_FILE ]]; then
    current_layout=$(<$TMP_FILE)
  else
    current_layout="bsp"
  fi

  next_layout=$(get_next_layout "$current_layout")
  yabai -m space --layout "$next_layout"
  echo "$next_layout" >$TMP_FILE
fi
