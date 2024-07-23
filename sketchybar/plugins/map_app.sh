#!/usr/bin/env bash

function get_app() {
  case "$1" in
  "Microsoft Outlook")
    result="Outlook"
    ;;
  "BoltAI")
    result="AI"
    ;;
  "Arc")
    result="Browser"
    ;;
  "Cursor")
    result="Editor"
    ;;
  "WezTerm")
    result="Terminal"
    ;;
  "Obsidian")
    result="Notes"
    ;;
  *)
    result="$1"
    ;;
  esac

  echo $result
}

echo "$(get_app "$1")"
