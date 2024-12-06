#!/usr/bin/env zsh

source "$CONFIG_DIR/env.sh"

flatten() {
  echo "flatten"
  aerospace flatten-workspace-tree
}

grid() {
  echo "grid"
  aerospace layout tiles
}

stack() {
  echo "stack"
  aerospace layout accordion
}

if [ "$SENDER" = "mouse.clicked" ]; then
  if [ "$NAME" = "layout.flatten" ]; then
    flatten
  elif [ "$NAME" = "layout.grid" ]; then
    grid
  elif [ "$NAME" = "layout.stack" ]; then
    stack
  fi
fi
