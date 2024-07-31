#!/usr/bin/env bash

# requires windows to be present in the bar
sketchybar_get_windows_in_bar() {
  local space=$1
  sketchybar --query bar | jq .items | tr -d '"' | grep -E "\[|\]|window\.$space\." | sed -E "s/window\.$space\.//"
}

# Call the function and print the output
sketchybar_get_windows_in_bar $1
