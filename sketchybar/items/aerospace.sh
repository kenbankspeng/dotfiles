source "$PLUGIN_DIR/helpers/aerospace.sh"

# create and empty the cache files
mkdir -p "$CACHE_DIR"
touch "$CACHE"
: >"$CACHE"

sketchybar --add event aerospace_reset
sketchybar --add event aerospace_focus_changed
sketchybar --add event aerospace_window_created
sketchybar --add event aerospace_window_destroyed
sketchybar --add event aerospace_workspace_change

props=(
  icon.drawing=off
  icon.padding_left=0
  icon.padding_right=0
  label.drawing=off
  label.padding_left=0
  label.padding_right=0
  background.drawing=off
  padding_left=0
  padding_right=0
  script="$PLUGIN_DIR/windows.sh"
)
# reconstruct the entire bar when a window changes
sketchybar --add item aerospace_listener left \
  --set aerospace_listener "${props[@]}" \
  script="$PLUGIN_DIR/aerospace.sh" \
  click_script="aerospace workspace $sid" \
  --subscribe aerospace_listener \
  aerospace_reset \
  aerospace_window_created \
  aerospace_window_destroyed \
  aerospace_focus_changed \
  aerospace_workspace_change
