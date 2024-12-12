#!/usr/bin/env bash

confetti() {
  afplay "$CONFIG_DIR/plugins/helpers/Cheer.wav" &
  open "raycast://extensions/raycast/raycast/confetti" &
}

if [ "$BUTTON" = "left" ]; then
  sketchybar --reload
elif [ "$BUTTON" = "right" ]; then
  confetti
fi
