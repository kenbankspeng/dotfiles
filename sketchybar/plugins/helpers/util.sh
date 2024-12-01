#!/usr/bin/env zsh

# check for whole word match in array
item_in_array() {
  local item="$1"
  shift
  if printf '%s\n' "$@" | rg -q "^$item$"; then
    return 0
  else
    return 1
  fi
}

unmatched_items() {
  local source="$1"
  local targets="$2"

  local source_pattern=$(echo "$source" | tr ' ' '|')

  local result=""

  for target in $(echo "$targets" | tr ' ' '\n'); do
    local item=${target##*.}

    local source_count=$(echo "$source" | grep -o "$item" | wc -l)
    local target_count=$(echo "$targets" | grep -o "$item" | wc -l)

    if [[ ! "$source_pattern" =~ $item ]] || ((target_count > source_count)); then
      result+="$target "
    fi
  done

  echo "$result"
}
