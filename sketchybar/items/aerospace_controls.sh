#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"

# background.color="$GROUP"
props=(
  icon.padding_left=6
  icon.padding_right=6
  script="$PLUGIN_DIR/aerospace_controls.sh"
)


# spacer
sketchy_add_item layout.spacer.left center \
  --set layout.spacer.left icon.width=5


# stack layout
sketchy_add_item layout.stack center \
  --set layout.stack icon=$ICON_STACK "${props[@]}" \
  --subscribe layout.stack mouse.clicked

# tiles layout
sketchy_add_item layout.tiles center \
  --set layout.tiles icon="$ICON_TILE" "${props[@]}" \
  --subscribe layout.tiles mouse.clicked

# floating / tiling
sketchy_add_item layout.float center \
  --set layout.float icon="$ICON_FLOAT" "${props[@]}" \
  --subscribe layout.float mouse.clicked

# join windows left
sketchy_add_item layout.join_left center \
  --set layout.join_left icon="$ICON_JOIN_LEFT" "${props[@]}" icon.font="$ICOMOON:20" \
  --subscribe layout.join_left mouse.clicked

# join windows right
sketchy_add_item layout.join_right center \
  --set layout.join_right icon="$ICON_JOIN_RIGHT" "${props[@]}" icon.font="$ICOMOON:20" \
  --subscribe layout.join_right mouse.clicked

# flatten workspace tree
sketchy_add_item layout.flatten center \
  --set layout.flatten icon="$ICON_FLATTEN" "${props[@]}" \
  --subscribe layout.flatten mouse.clicked

# enable/disable
sketchy_add_item layout.enable center \
  --set layout.enable icon="$ICON_BUTTON" "${props[@]}" \
  --subscribe layout.enable mouse.clicked

# auto-focus
sketchy_add_item layout.auto_focus center \
  --set layout.auto_focus icon="$ICON_MOUSE_PTR" "${props[@]}" \
  --subscribe layout.auto_focus mouse.clicked

# spacer
sketchy_add_item layout.spacer.right center \
  --set layout.spacer.right icon.width=5

sketchybar --add bracket aerospace_controls '/layout\..*/' \
           --set aerospace_controls background.color=$GROUP
                    