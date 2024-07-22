#!/bin/bash

case "$1" in
"BoltAI")
  icon="􀋥"
  ;;
"Arc")
  icon="􀤆"
  ;;
"Cursor")
  icon="􀈎"
  ;;
"WezTerm")
  icon="􀩼"
  ;;
"Finder")
  icon="􀎽"
  ;;
"Obsidian")
  icon="􀉞"
  ;;
*)
  icon="􁊓"
  ;;
esac

echo $icon
