#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

# spacer
sketchy_add_item spacer left \
  --set spacer padding_left=20

padding=(
  background.height=10
  background.corner_radius=0
  background.color="$GROUP"
)

props=(
  background.color="$GROUP"
  background.corner_radius=0
  label.drawing=off
  script="$PLUGIN_DIR/aerospace_controls.sh"
)

sketchy_add_item stack.padding.1 left \
  --set stack.padding.1 "${padding[@]}"

# stack layout
sketchy_add_item layout.stack left \
  --set layout.stack icon=$ICON_STACK "${props[@]}" \
  --subscribe layout.stack mouse.clicked

# tiles layout
sketchy_add_item layout.tiles left \
  --set layout.tiles icon="$ICON_TILE" "${props[@]}" \
  --subscribe layout.tiles mouse.clicked

# floating / tiling
sketchy_add_item layout.float left \
  --set layout.float icon="$ICON_FLOAT" "${props[@]}" \
  --subscribe layout.float mouse.clicked

# join windows left
sketchy_add_item layout.join_left left \
  --set layout.join_left icon="$ICON_JOIN_LEFT" "${props[@]}" \
  icon.font="$ICOMOON:20" \
  --subscribe layout.join_left mouse.clicked

# join windows right
sketchy_add_item layout.join_right left \
  --set layout.join_right icon="$ICON_JOIN_RIGHT" "${props[@]}" \
  icon.font="$ICOMOON:20" \
  --subscribe layout.join_right mouse.clicked

# flatten workspace tree
sketchy_add_item layout.flatten left \
  --set layout.flatten icon="$ICON_FLATTEN" "${props[@]}" \
  --subscribe layout.flatten mouse.clicked

# enable/disable
sketchy_add_item layout.enable left \
  --set layout.enable icon="$ICON_BUTTON" "${props[@]}" \
  --subscribe layout.enable mouse.clicked

# auto-focus
sketchy_add_item layout.auto_focus left \
  --set layout.auto_focus icon="$ICON_MOUSE_PTR" "${props[@]}" \
  --subscribe layout.auto_focus mouse.clicked

sketchy_add_item stack.padding.2 left \
  --set stack.padding.2 "${padding[@]}"