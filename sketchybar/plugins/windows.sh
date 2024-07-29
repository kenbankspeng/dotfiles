#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

# Map accent colors to an array
ACCENT_COLORS=($ACCENT1 $ACCENT2 $ACCENT3 $ACCENT4 $ACCENT5 $ACCENT6 $ACCENT7 $ACCENT8 $ACCENT9 $ACCENT10)

CACHE_DIR="/tmp/sketchybar_window_cache"
mkdir -p "$CACHE_DIR"

# Get dynamic window information grouped by space
query=$(yabai -m query --windows | jq '[group_by(.space)[] | {
    space: .[0].space,
    apps: [.[] | .app],
    has_focus: (map(select(.["has-focus"] == true).app) | if length > 0 then .[0] else false end)
}]')

# Create and update windows dynamically
echo "$query" | jq -c '.[]' | while IFS= read -r item; do
  sid=$(echo "$item" | jq '.space')
  apps=($(echo "$item" | jq -r '.apps[]'))

  # Load previous window count from cache
  cache_file="$CACHE_DIR/space_$sid"
  if [ -f "$cache_file" ]; then
    prev_count=$(cat "$cache_file")
  else
    prev_count=0
  fi

  current_count=${#apps[@]}
  echo "$current_count" >"$cache_file"

  # Allocate only needed items
  for ((wid = 0; wid < current_count; wid++)); do
    app=${apps[$wid]}
    icon="$($CONFIG_DIR/icon_map.sh "$app")"

    if ((wid >= prev_count)); then
      sketchybar --add item window.$sid.$wid left
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
    sketchybar --set window.$sid.$wid "${props[@]}" icon.drawing=on icon="$icon"
  done

  # Remove any excess items dynamically
  if ((current_count < prev_count)); then
    for ((wid = current_count; wid < prev_count; wid++)); do
      sketchybar --remove window.$sid.$wid
    done
  fi

  # Group windows in the same space with a bracket
  bracket_cache_file="$CACHE_DIR/space_bracket_cache"

  # Ensure the cache file exists
  touch "$bracket_cache_file"

  members=($(seq 0 $((current_count - 1)) | sed "s/^/window.$sid./"))

  if [ ${#members[@]} -gt 0 ]; then
    echo "space$sid" "${members[@]}"
    if ! grep -q "^space$sid" "$bracket_cache_file"; then
      sketchybar --add bracket "space$sid" "${members[@]}"
      echo "space$sid" >>"$bracket_cache_file"
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
  else
    if grep -q "^space$sid" "$bracket_cache_file"; then
      sketchybar --remove bracket "space$sid"
      # Properly remove the bracket entry from the cache
      sed -i '' "/^space$sid/d" "$bracket_cache_file"
    fi
  fi
done

# Sort the items by sid and wid
all_items=($(sketchybar --query bar | jq -r '.items[]' | grep '^window\.' | sort -t '.' -k2,2n -k3,3n))

# Reorder items using sketchybar --reorder
sketchybar --reorder "${all_items[@]}"
