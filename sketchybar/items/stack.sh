#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"

position=left

props=(
  icon.drawing=off
  label.drawing=off
  background.color=off
  script="$PLUGIN_DIR/stack.sh"
)
sketchy_add event space_changed \
  --add item stack_listener $position \
  --set stack_listener "${props[@]}" \
  --subscribe stack_listener space_changed

props=(
  label.drawing=off
  script="$PLUGIN_DIR/aerospace_stack.sh"
)

# grid
sketchybar -m --add item grid $position \
  --set grid icon=$GRID ${props[@]} \
  --subscribe grid mouse.clicked

# stack
sketchybar -m --add item stack $position \
  --set stack icon=$STACK ${props[@]} \
  --subscribe stack mouse.clicked
