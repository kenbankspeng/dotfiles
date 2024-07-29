#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

# Map accent colors to an array
ACCENT_COLORS=($ACCENT1 $ACCENT2 $ACCENT3 $ACCENT4 $ACCENT5 $ACCENT6 $ACCENT7 $ACCENT8 $ACCENT9 $ACCENT10)

CACHE_DIR="/tmp/sketchybar_window_cache"
mkdir -p "$CACHE_DIR"

# Get space information, including windows
spaces_query=$(yabai -m query --spaces)

# Create and update windows dynamically
echo "$spaces_query" | jq -c '.[]' | while IFS= read -r space_item; do
  sid=$(echo "$space_item" | jq '.index')
  current_count=$(echo "$space_item" | jq '.windows | length')

  # Track existing items
  items_cache_file="$CACHE_DIR/items_$sid"
  if [ -f "$items_cache_file" ]; then
    existing_items=$(cat "$items_cache_file")
  else
    existing_items=""
  fi

  # Allocate only needed items
  for ((wid = 0; wid < current_count; wid++)); do
    window_id=$(echo "$space_item" | jq -r ".windows[$wid]")
    app=$(yabai -m query --windows --window "$window_id" | jq -r '.app')
    icon="$($CONFIG_DIR/icon_map.sh "$app")"

    item_id="window.$sid.$wid"
    if ! grep -q "$item_id" <<<"$existing_items"; then
      sketchybar --add item "$item_id" left
      echo "$item_id" >>"$items_cache_file"
    fi

    props=(
      label.drawing=off
      icon.drawing=off
      padding_left=5
      padding_right=5
      icon.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE"
      icon.padding_left=2
      icon.padding_right=2
    )
    sketchybar --set "$item_id" "${props[@]}" icon.drawing=on icon="$icon"
  done

  # If space is empty, show a '-' symbol
  if ((current_count == 0)); then
    item_id="window.$sid.0"
    if ! grep -q "$item_id" <<<"$existing_items"; then
      sketchybar --add item "$item_id" left
      echo "$item_id" >>"$items_cache_file"
    fi
    sketchybar --set "$item_id" label.drawing=on label='-' \
      padding_left=5 padding_right=5 icon.drawing=off
  fi

  # Remove any excess items dynamically and update the cache
  new_existing_items=""
  for ((wid = 0; wid < current_count; wid++)); do
    new_existing_items+="window.$sid.$wid"$'\n'
  done
  if ((current_count == 0)); then
    new_existing_items+="window.$sid.0"$'\n'
  fi
  echo "$new_existing_items" >"$items_cache_file"

  # Remove items that are no longer needed
  for item in $existing_items; do
    if ! grep -q "$item" <<<"$new_existing_items"; then
      sketchybar --remove "$item"
    fi
  done

  # Group windows in the same space with a bracket
  bracket_cache_file="$CACHE_DIR/space_bracket_cache"

  # Ensure the cache file exists
  touch "$bracket_cache_file"

  if ((current_count == 0)); then
    members=("window.$sid.0")
  else
    members=($(seq 0 $((current_count - 1)) | sed "s/^/window.$sid./"))
  fi

  existing_entry=$(grep "^space$sid " "$bracket_cache_file")
  if [ -z "$existing_entry" ]; then
    sketchybar --add bracket "space$sid" "${members[@]}"
    echo "space$sid ${members[*]}" >>"$bracket_cache_file"
  elif [ "$existing_entry" != "space$sid ${members[*]}" ]; then
    sketchybar --remove "space$sid"
    sketchybar --add bracket "space$sid" "${members[@]}"
    sed -i '' "/^space$sid /d" "$bracket_cache_file"
    echo "space$sid ${members[*]}" >>"$bracket_cache_file"
  fi

  space_props=(
    padding_left=10
    padding_right=10
    background.border_color=${ACCENT_COLORS[$((sid - 1))]}
    background.border_width=2
    background.corner_radius=4
    background.height=30
  )
  sketchybar --set "space$sid" "${space_props[@]}"
done

# Sort the items by sid and wid
all_items=($(sketchybar --query bar | jq -r '.items[]' | grep '^window\.' | sort -t '.' -k2,2n -k3,3n))

# Reorder items using sketchybar --reorder
sketchybar --reorder "${all_items[@]}"
