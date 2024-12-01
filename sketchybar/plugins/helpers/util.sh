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
  local source=("${(s/ /)1}")  # Split the first argument into an array
  local targets=("${(s/ /)${2}}") # Split the second argument into an array

  local result=""
  local -A source_count
  local -A target_count

  # Count occurrences in source
  for s_item in "${source[@]}"; do
    ((source_count["$s_item"]++))  # Use quotes around associative array keys
  done

  # Count occurrences in targets
  for target in "${targets[@]}"; do
    local item=${target##*.}
    ((target_count["$item"]++))  # Use quotes around associative array keys
  done

  # Find unmatched items
  for target in "${targets[@]}"; do
    local item=${target##*.}
    if ((target_count["$item"] > source_count["$item"])); then  # Use quotes around associative array keys
      result+="$target "
      ((target_count["$item"]--))  # Use quotes around associative array keys
    fi
  done

  echo "$result"
}
