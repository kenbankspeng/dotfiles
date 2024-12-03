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

remove_item() {
  local item_to_delete="$1"
  shift
  local list=("$@")
  local new_list=()
  local removed=false

  # print "list: ${list[@]}" >&2
  # print "item_to_delete: $item_to_delete" >&2

  for item in "${list[@]}"; do
    if [[ "$item" == "$item_to_delete" && $removed == false ]]; then
      removed=true
      continue
    fi
    new_list+=("$item")
  done

  # print "new_list: ${new_list[@]}" >&2

  echo "${new_list[@]}"
}


unmatched_items() {
  local IFS=$'\n'
  local source=("${(f)1}")
  local targets=("${(f)2}")
  local shadow=("${targets[@]}")

  # print "##########################" >&2
  # print "source: ${source[@]}" >&2
  # print "targets: ${targets[@]}" >&2
  for key in "${source[@]}"; do
    for i in "${shadow[@]}"; do
      # print "key: $key" >&2
      # print "i: $i" >&2
      if [[ $key == "${i##*.}" ]]; then
        # print "pre-shadow: ${shadow[@]}" >&2
        shadow=($(remove_item "$i" "${shadow[@]}"))
        # print "post-shadow: ${shadow[@]}" >&2
        break
      fi
    done
  done
  
  if [[ ${#shadow[@]} -gt 0 ]]; then
    print "result: ${shadow[@]}" >&2
  fi
  # print "++++++++++++++++++++++++" >&2

  echo "${shadow[@]}"
}
