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
  local IFS=$'\n'
  local source=("${(f)1}")
  local targets=("${(f)2}")
  local shadow=("${targets[@]}")

  for key in "${source[@]}"; do
    local matched=false
    for ((i=0; i<${#targets[@]}; i++)); do 
      local target_item="${targets[i]}"
      print "key: $key" >&2
      print "i: $i" >&2
      print "target_item: $target_item" >&2
      print "end: ${target_item##*.}" >&2
      if [[ $key == "${target_item##*.}" ]]; then
        shadow=("${shadow[@]:0:i}" "${shadow[@]:((i + 1))}")
        break
      fi
    done
  done

  print "result: ${shadow[@]}" >&2

  echo "${shadow[@]}"
}
