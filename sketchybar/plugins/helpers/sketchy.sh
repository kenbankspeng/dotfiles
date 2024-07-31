#!/usr/bin/env bash

sketchybar_get_windows_in_space() {
  local space=$1
  # Querying sketchybar and storing the result
  json=$(sketchybar --query bar)
  echo "Full JSON output:"
  echo "$json" | jq

  # Extracting items array
  items=$(echo "$json" | jq -r '.items[]')
  echo -e "\nItems array:"
  echo "$items" | jq -R . | jq -s .

  # Extracting window IDs within the specified space
  window_ids=()
  space_marker="space$space"
  is_in_space=false

  echo -e "\nProcessing items:"
  while read -r item; do
    echo "Processing item: $item"
    if [[ $item == "$space_marker" ]]; then
      is_in_space=true
      echo "Entering space: $space_marker"
    elif [[ $item =~ ^space[0-9]+$ ]] && [[ $item != "$space_marker" ]]; then
      is_in_space=false
      echo "Exiting space: $item"
    fi

    if $is_in_space && [[ $item =~ ^window\.$space\.[0-9]+$ ]]; then
      window_id=$(echo "$item" | sed -E "s/window\.$space\.([0-9]+)/\1/")
      window_ids+=("$window_id")
      echo "Found window ID: $window_id"
    fi
  done <<<"$items"

  # Output the window IDs as JSON array
  windows=$(printf "%s\n" "${window_ids[@]}" | jq -R . | jq -s .)
  echo -e "\nFiltered window IDs:"
  echo "$windows" | jq
}

# Capture the output of the function and print it
output=$(sketchybar_get_windows_in_space $1)
echo -e "\nFinal output:"
echo "$output"
