wid=0
windows=()
for i in {1..20}; do
  wid=$i

  props=(
    padding_left=5
    padding_right=5
    label.drawing=off
    icon.font="$SKETCHY_FONT:$SKETCHY_FONTSIZE"
    icon.padding_left=2
    icon.padding_right=2
  )
  sketchybar --add item window.$wid left \
    --set window.$wid "${props[@]}"
  #--subscribe window.$sid mouse.clicked
done

sketchybar --add event window_changed \
  --add item windows left \
  --set windows script="$PLUGIN_DIR/windows.sh" \
  --subscribe windows window_changed
