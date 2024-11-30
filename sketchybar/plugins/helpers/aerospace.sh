aerospace_workspaces() {
  echo "$(aerospace list-workspaces --all)"
}

aerospace_apps_in_spaces() {
  echo "$(aerospace list-windows --all --json --format %{monitor-appkit-nsscreen-screens-id}%{workspace}%{app-bundle-id}%{app-name})"
}

aerospace_apps_in_space() {
  local sid="$1"
  echo "$(aerospace_apps_in_spaces | jq --arg space "$sid" '.[] | select(.workspace == $space)' | jq -r '.["app-name"]')"
}
