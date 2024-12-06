#!/usr/bin/env zsh

source "$PLUGIN_DIR/helpers/sketchy.sh"

# spacer
sketchybar -m --add item spacer left \
  --set spacer padding_left=20

# stack dividers
stack_sections=(0 1 2 3)
for id in $stack_sections; do
  sketchy_add item stack.divider.$id left \
    --set stack.divider.$id background.height=1 \
    background.color=$DIVIDER
done

props=(
  label.drawing=off
  script="$PLUGIN_DIR/aerospace_layout.sh"
)

# flatten
sketchybar -m --add item layout.flatten left \
  --set layout.flatten icon=$FLATTEN ${props[@]} \
  --move layout.flatten before stack.divider.1 \
  --subscribe layout.flatten mouse.clicked

# grid
sketchybar -m --add item layout.grid left \
  --set layout.grid icon=$GRID ${props[@]} \
  --move layout.grid before stack.divider.2 \
  --subscribe layout.grid mouse.clicked

# stack
sketchybar -m --add item layout.stack left \
  --set layout.stack icon=$STACK ${props[@]} \
  --move layout.stack before stack.divider.3 \
  --subscribe layout.stack mouse.clicked
