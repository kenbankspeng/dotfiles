#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

# spacer
sketchy_add_item spacer left \
  --set spacer padding_left=20

# stack dividers
stack_sections=(0 1 2 3 4 5 6 7)
for id in $stack_sections; do
  sketchy_add_item stack.divider.$id left \
    --set stack.divider.$id background.height=1 \
    background.color=$DIVIDER
done

props=(
  label.drawing=off
  script="$PLUGIN_DIR/aerospace_layout.sh"
)

# stack layout
sketchy_add_item layout.stack left \
  --set layout.stack icon=$ICON_STACK ${props[@]} \
  --move layout.stack before stack.divider.1 \
  --subscribe layout.stack mouse.clicked

# tiles layout
sketchy_add_item layout.tiles left \
  --set layout.tiles icon=$ICON_TILE ${props[@]} \
  --move layout.tiles before stack.divider.2 \
  --subscribe layout.tiles mouse.clicked

# floating / tiling
sketchy_add_item layout.float left \
  --set layout.float icon=$ICON_FLOAT ${props[@]} \
  --move layout.float before stack.divider.3 \
  --subscribe layout.float mouse.clicked

# join windows
sketchy_add_item layout.join left \
  --set layout.join icon=$ICON_JOIN ${props[@]} \
  icon.font="$NERD:20" \
  --move layout.join before stack.divider.4 \
  --subscribe layout.join mouse.clicked

# flatten workspace tree
sketchy_add_item layout.flatten left \
  --set layout.flatten icon=$ICON_FLATTEN ${props[@]} \
  --move layout.flatten before stack.divider.5 \
  --subscribe layout.flatten mouse.clicked

# enable/disable
sketchy_add_item layout.enable left \
  --set layout.enable icon=$ICON_BUTTON ${props[@]} \
  --move layout.enable before stack.divider.6 \
  --subscribe layout.enable mouse.clicked

# auto-focus
sketchy_add_item layout.auto_focus left \
  --set layout.auto_focus icon=$ICON_MOUSE_PTR ${props[@]} \
  --move layout.auto_focus before stack.divider.7 \
  --subscribe layout.auto_focus mouse.clicked
