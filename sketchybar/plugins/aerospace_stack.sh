#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"

cache_file="$CACHE_DIR/stack_cache"
touch "$cache_file"
source "$cache_file"

# Initialize cache variables if not set
: ${GRID:=on}
: ${STACK:=off}

if [ "$NAME" = "grid" ]; then
  if [ "$GRID" = off ]; then
    GRID=on
    STACK=off
  else
    GRID=off
    STACK=on
  fi
elif [ "$NAME" = "stack" ]; then
  if [ "$STACK" = off ]; then
    STACK=on
    GRID=off
  else
    STACK=on
    GRID=off
  fi
fi

if [ "$GRID" = on ]; then
  grid_props=(
    icon.color=$ON
    background.color=$ACTIVE_BACKGROUND
  )
else
  grid_props=(
    icon.color=$OFF
    background.color=$TRANSPARENT
  )
fi

if [ "$STACK" = on ]; then
  stack_props=(
    icon.color=$ON
    background.color=$ACTIVE_BACKGROUND
  )
else
  stack_props=(
    icon.color=$OFF
    background.color=$TRANSPARENT
  )
fi

common_props=(
  background.corner_radius=0
  background.height=$((ITEM_HEIGHT + 1))
)

sketchybar --set grid "${common_props[@]}" "${grid_props[@]}"
sketchybar --set stack "${common_props[@]}" "${stack_props[@]}"

# Save cache
echo "GRID=$GRID" >"$cache_file"
echo "STACK=$STACK" >>"$cache_file"
