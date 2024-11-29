source "$CONFIG_DIR/env.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"

cache_all_workspace_apps() {
  echo $(aerospace_apps_in_spaces) >"$CACHE"
}

find_workspace_app() {
  local workspace="$1"
  local app_name="$2"

  jq --arg workspace "$workspace" --arg app_name "$app_name" '
    any(.[]; .workspace == $workspace and ."app-name" == $app_name)
  ' "$CACHE"
}

remove_workspace_app() {
  local workspace="$1"
  local app_name="$2"

  jq --arg workspace "$workspace" --arg app_name "$app_name" '
    . |= map(select(.workspace != $workspace or ."app-name" != $app_name))
  ' "$CACHE" >"$TEMP" && mv "$TEMP" "$CACHE"
}

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
