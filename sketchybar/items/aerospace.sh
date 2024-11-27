source "$PLUGIN_DIR/helpers/aerospace.sh"

sketchybar --add event aerospace_workspace_change

for sid in $(aerospace_workspaces); do
  props=(
    space="$sid"
    icon="$sid"
    script="$PLUGIN_DIR/aerospace_space.sh $sid"
    click_script="aerospace workspace $sid"
  )
  sketchybar --add space space.$sid left \
    --set space.$sid "${props[@]}" \
    --subscribe space.$sid mouse.clicked

done

# reconstruct the bar when a window changes
sketchybar --add item aerospace_windows left \
  --set aerospace_windows \
  script="$PLUGIN_DIR/aerospace_windows.sh" \
  --subscribe aerospace_windows aerospace_workspace_change
