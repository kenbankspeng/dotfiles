#!/usr/bin/env bash

source "$PLUGIN_DIR/helpers/sketchy.sh"
source "$PLUGIN_DIR/helpers/aerospace.sh"

# create the cache directory
mkdir -p "$CACHE_DIR"

# Reset the logs
: > "$CACHE_DIR/$LOG_FILE"

sketchybar --add event aerospace_workspace_change
sketchybar --add event yabai_window_created
sketchybar --add event yabai_window_destroyed
sketchybar --add event yabai_window_focused
sketchybar --add event yabai_window_minimized
sketchybar --add event yabai_window_deminimized

sketchy_add_item aerospace_spaces_spacer left \
  --set aerospace_spaces_spacer background.padding_left=10

props=(
  icon.drawing=off
  label.drawing=off
  background.drawing=off
  width=0
)
sketchy_add_item space_listener left \
  --set space_listener "${props[@]}" \
  script="$PLUGIN_DIR/aerospace_spaces.sh" \
  --subscribe space_listener \
  aerospace_workspace_change \
  yabai_window_created \
  yabai_window_destroyed \
  yabai_window_focused \
  yabai_window_minimized \
  yabai_window_deminimized



get_group_color() {
  local sid="$1"
  case "$sid" in
    0)
      echo "$FLAMINGO"
      ;;
    1)
      echo "$GREEN"
      ;;
    2)
      echo "$BLUE"
      ;;
    3)
      echo "$YELLOW"
      ;;
    4)
      echo "$MAUVE"
      ;;
    5)
      echo "$PEACH"
      ;;
    6)
      echo "$ROSEWATER"
      ;;
    7) 
      echo "$RED"
      ;;
    8)
      echo "$MAROON"
      ;;
    9)
      echo "$TEAL"
      ;;
    *)
      echo "$SKY"
      ;;
  esac
}

# add dividers as anchor points for the workspaces
props=(
  background.padding_left=0
  background.padding_right=0
  background.color=$RED
  icon.width=1
  icon.padding_left=0
  icon.padding_right=0
)
workspaces=("0" $(aerospace_workspaces))
for sid in "${workspaces[@]}"; do
  sketchy_add_item "divider.start.$sid" left \
    --set "divider.start.$sid" "${props[@]}"

  sketchy_add_item "divider.end.$sid" left \
    --set "divider.end.$sid" "${props[@]}"
  
  sketchybar --add bracket "group.$sid" '/window.$("$sid")\..*/' \
           --set "group.$sid" \
                    background.corner_radius=4  \
                    background.color=$(get_group_color "$sid") \
                    background.height=$BAR_HEIGHT
done

