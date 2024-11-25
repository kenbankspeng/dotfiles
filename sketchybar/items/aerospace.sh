sketchybar --add event aerospace_workspace_change

for sid in $(aerospace list-workspaces --all); do
  sketchybar --add item space.$sid left \
    --subscribe space.$sid aerospace_workspace_change \
    --set space.$sid \
    background.color=$MAUVE \
    background.height=30 \
    background.drawing=off \
    label="$sid" \
    click_script="aerospace workspace $sid" \
    script="$CONFIG_DIR/plugins/aerospace.sh $sid"
done
