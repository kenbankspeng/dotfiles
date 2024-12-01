#!/usr/bin/env zsh

confetti() {
  afplay "$CONFIG_DIR/plugins/helpers/Cheer.wav" &
  open "raycast://extensions/raycast/raycast/confetti" &
}

if [ "$BUTTON" = "left" ]; then
  confetti
elif [ "$BUTTON" = "right" ]; then
  confetti
fi
