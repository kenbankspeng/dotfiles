#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/yabai.sh"

if [ "$SENDER" = "mouse.clicked" ]; then
  if [ "$NAME" = "layout.stack" ]; then
    aerospace layout v_accordion
    aerospace focus up --boundaries-action wrap-around-the-workspace
  elif [ "$NAME" = "layout.tiles" ]; then
    aerospace layout tiles h_tiles v_tiles
  elif [ "$NAME" = "layout.float" ]; then
    aerospace layout floating tiling
  elif [ "$NAME" = "layout.auto_focus" ]; then
    if [ $(yabai_autofocus) = "disabled" ]; then
      sketchybar --set layout.auto_focus icon.color=$OFF
    else
      sketchybar --set layout.auto_focus icon.color=$ON
    fi
  fi
fi
