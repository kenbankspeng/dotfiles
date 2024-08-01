# check for whole word match
item_in_array() {
  local item="$1"
  shift
  if printf '%s\n' "$@" | grep -q "^$item$"; then
    return 0
  else
    return 1
  fi
}
