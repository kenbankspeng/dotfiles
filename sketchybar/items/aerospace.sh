source "$PLUGIN_DIR/helpers/aerospace.sh"

sketchybar --add event aerospace_workspace_change

# reconstruct the entire bar when a window changes
sketchybar --add item aerospace left \
  --set aerospace \
  script="$PLUGIN_DIR/aerospace.sh" \
  click_script="aerospace workspace $sid" \
  --subscribe aerospace aerospace_workspace_change
