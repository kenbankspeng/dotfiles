#!/usr/bin/env bash

function get_icon() {
  case "$1" in
  "Finder")
    result="􀎽"
    ;;
  "Microsoft Outlook")
    result="􀍕"
    ;;
  "BoltAI")
    result="􀋥"
    ;;
  "Arc")
    result="􀤆"
    ;;
  "Cursor")
    result="􀈎"
    ;;
  "WezTerm")
    result="􀩼"
    ;;
  "Obsidian")
    result="􀉞"
    ;;
  *)
    result="􁊓"
    ;;
  esac

  echo $result
}

echo "$(get_icon "$1")"
