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
  --set layout.flatten icon=$ICON_FLATTEN ${props[@]} icon.padding_left=3 \
  --move layout.flatten before stack.divider.1 \
  --subscribe layout.flatten mouse.clicked

# layout type
sketchybar -m --add item layout.type left \
  --set layout.type icon=$ICON_GRID ${props[@]} \
  --move layout.type before stack.divider.2 \
  --subscribe layout.type mouse.clicked

# layout direction
sketchybar -m --add item layout.direction left \
  --set layout.direction icon=$ICON_STACK ${props[@]} \
  --move layout.direction before stack.divider.3 \
  --subscribe layout.direction mouse.clicked
