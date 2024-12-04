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

remove_first_item() {
  local item_to_delete="$1"
  shift
  local list=("$@")
  local new_list=()
  local removed=false

  for item in "${list[@]}"; do
    if [[ "$item" == "$item_to_delete" && $removed == false ]]; then
      removed=true
      continue
    fi
    new_list+=("$item")
  done

  echo "${new_list[@]}"
}


unmatched_items() {
  # delimit by space or newline
  local IFS=$' \n'
  local source=("${(f)1}")
  local target=("${(f)2}")

  for key in "${source[@]}"; do
    for i in "${target[@]}"; do
      if [[ $key == "${i##*.}" ]]; then
        target=($(remove_first_item "$i" "${(@)target}"))
        break
      fi
    done
  done

  # Remove empty strings
  target=("${(@)target:#""}")

  # Remove items ending in .default
  target=("${(@)target:#*.default}")

  echo "${target[@]}"
}
