#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

# spacer
sketchy_add_item spacer right \
  --set spacer padding_left=0 padding_right=0 width=25

# stack dividers
stack_sections=(0 1 2 3 4 5 6 7 8)
for id in "${stack_sections[@]}"; do
  sketchy_add_item "stack.divider.$id" right \
    --set "stack.divider.$id" background.height=1 \
    background.color="$DIVIDER"
done


props=(
  background.color="$GROUP"
  background.corner_radius=0
  label.drawing=off
  script="$PLUGIN_DIR/aerospace_controls.sh"
)

# auto-focus
sketchy_add_item layout.auto_focus right \
  --set layout.auto_focus icon="$ICON_MOUSE_PTR" "${props[@]}" \
  --move layout.auto_focus before stack.divider.1 \
  --subscribe layout.auto_focus mouse.clicked

# enable/disable
sketchy_add_item layout.enable right \
  --set layout.enable icon="$ICON_BUTTON" "${props[@]}" \
  --move layout.enable before stack.divider.2 \
  --subscribe layout.enable mouse.clicked

# flatten workspace tree
sketchy_add_item layout.flatten right \
  --set layout.flatten icon="$ICON_FLATTEN" "${props[@]}" \
  --move layout.flatten before stack.divider.3 \
  --subscribe layout.flatten mouse.clicked

# join windows right
sketchy_add_item layout.join_right right \
  --set layout.join_right icon="$ICON_JOIN_RIGHT" "${props[@]}" icon.font="$ICOMOON:20" \
  --move layout.join_right before stack.divider.4 \
  --subscribe layout.join_right mouse.clicked

# join windows left
sketchy_add_item layout.join_left right \
  --set layout.join_left icon="$ICON_JOIN_LEFT" "${props[@]}" icon.font="$ICOMOON:20" \
  --move layout.join_left before stack.divider.5 \
  --subscribe layout.join_left mouse.clicked

# floating / tiling
sketchy_add_item layout.float right \
  --set layout.float icon="$ICON_FLOAT" "${props[@]}" \
  --move layout.float before stack.divider.6 \
  --subscribe layout.float mouse.clicked

# tiles layout
sketchy_add_item layout.tiles right \
  --set layout.tiles icon="$ICON_TILE" "${props[@]}" \
  --move layout.tiles before stack.divider.7 \
  --subscribe layout.tiles mouse.clicked

# stack layout
sketchy_add_item layout.stack right \
  --set layout.stack icon=$ICON_STACK "${props[@]}" \
  --move layout.stack before stack.divider.8 \
  --subscribe layout.stack mouse.clicked


sketchy_add_item stack.padding.2 right \
  --set stack.padding.2 "${padding[@]}"