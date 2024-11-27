aerospace_workspaces() {
  echo "$(aerospace list-workspaces --all)"
}

aerospace_space_window_map() {
  echo "$(aerospace list-windows --all --json --format %{workspace}%{app-name}%{app-bundle-id})"
}
