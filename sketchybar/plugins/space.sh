#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"
source "$CONFIG_DIR/plugins/helpers/yabai.sh"
source "$CONFIG_DIR/plugins/helpers/sketchy.sh"

CLICK_HANDLER="$CONFIG_DIR/plugins/window_action.sh"

# Helper to modify alpha of a 0xaarrggbb color
alpha() {
  local color=$1
  local new_alpha=$2
  local rgb_part=${color:4}
  echo 0x${new_alpha}${rgb_part} # new color
}

renew_cache() {
  local space_id="$1"
  local window_count="$2"
  local windows_cache_file="$3"

  local new_cached_windows=""
  for ((window_index = 0; window_index < window_count; window_index++)); do
    local window_id=$(yabai_get_windows_in_space "$space_id" | jq -r ".[$window_index]")
    new_cached_windows+="window.$space_id.$window_id"$'\n'
  done

  if ((window_count == 0)); then
    new_cached_windows+="window.$space_id.0"$'\n'
  fi

  echo "$new_cached_windows" >"$windows_cache_file"
  echo "$new_cached_windows"
}

# Determine closed windows by comparing new cache to prev cache
remove_closed_windows() {
  local new_cached_windows="$1"
  local cached_windows="$2"

  while IFS= read -r cached_window; do
    if ! grep -q "$cached_window" <<<"$new_cached_windows"; then
      sketchybar --remove "$cached_window"
    fi
  done <<<"$cached_windows"
}

# Add placeholder for empty spaces
add_placeholder() {
  local space_id="$1"
  local windows_cache_file="$2"
  local cached_windows="$3"
  local placeholder="window.$space_id.0"

  if (! grep -q "$placeholder" <<<"$cached_windows"); then
    sketchybar --add item "$placeholder" left
    sketchybar --set "$placeholder" script="$CLICK_HANDLER" \
      --subscribe "$placeholder" mouse.clicked
    echo "$placeholder" >>"$windows_cache_file"
  fi

  local window_props=(
    label.drawing=off
    icon.drawing=on
    icon="􀅽" # narrow icon needs more padding
    icon.padding_left=$((PADDING_H + 2))
    icon.padding_right=$((PADDING_H + 2))
  )
  sketchybar --set "$placeholder" "${window_props[@]}"
}

# As needed, add new windows, update existing, remove closed
manage_windows() {
  local space_id="$1"

  # get cached data
  local windows_cache_file="$CACHE_DIR/windows_$space_id"
  local dividers_cache_file="$CACHE_DIR/dividers_cache"
  local cached_windows=""
  [[ -f "$windows_cache_file" ]] && cached_windows=$(<"$windows_cache_file")
  local cached_dividers=""
  [[ -f "$dividers_cache_file" ]] && cached_dividers=$(<"$dividers_cache_file")

  # spaces will be added after windows available
  # can add dividers now to use as a marker
  local divider_handle="divider.$space_id"
  if (! grep -q "$divider_handle" <<<"$cached_dividers"); then
    sketchybar --add item "$divider_handle" left \
      --set "$divider_handle" icon.drawing=off label.drawing=off background.padding_left=10 background.padding_right=10
    echo "$divider_handle" >>"$dividers_cache_file"
  fi

  local window_count=$(yabai_get_num_windows_in_space "$space_id")

  # Add new windows and reorder them
  for ((window_index = 0; window_index < window_count; window_index++)); do
    local window_id=$(yabai_get_windows_in_space "$space_id" | jq -r ".[$window_index]")
    local window_handle="window.$space_id.$window_id"
    if (! grep -q "$window_handle" <<<"$cached_windows"); then
      # Add new windows
      sketchybar --add item "$window_handle" left \
        --set "$window_handle" script="$CLICK_HANDLER" \
        --move "$window_handle" before "$divider_handle" \
        --subscribe "$window_handle" mouse.clicked
      echo "$window_handle" >>"$windows_cache_file"

      # Reorder windows immediately after adding them to minimize flicker
      reorder_windows
    fi

    # style windows
    local app_name=$(yabai_get_window_app_name "$window_id")
    local icon=$($CONFIG_DIR/icon_map.sh "$app_name")

    # Update window properties
    local window_props=(
      label.drawing=off
      icon.font="$ICON_FONT:$ICON_FONTSIZE"
      icon="$icon"
    )
    sketchybar --set "$window_handle" "${window_props[@]}"
  done

  # Special case for empty spaces - add placeholder
  if ((window_count == 0)); then
    add_placeholder "$space_id" "$windows_cache_file" "$cached_windows"
    # Reorder windows immediately after adding them to minimize flicker
    reorder_windows
  fi

  # Remove closed windows
  local new_cached_windows=$(renew_cache "$space_id" "$window_count" "$windows_cache_file")
  remove_closed_windows "$new_cached_windows" "$cached_windows"

}

# ------------------

cache_windows() {
  local space_id="$1"
  local windows=("${@:2}")

  # Empty the cache file
  : >"$WINDOWS_CACHE_FILE"

  # If no windows, add placeholder
  if [ ${#windows[@]} -eq 0 ]; then
    windows=("window.$space_id.0")
  fi

  # Construct full window handles and cache them
  local window_handles=()
  for window_id in "${windows[@]}"; do
    window_handles+=("window.$space_id.$window_id")
  done

  printf "%s\n" "${window_handles[@]}" >"$WINDOWS_CACHE_FILE"
}

display_windows() {
  local space_id=$(yabai_get_focused_space)
  local windows=$(yabai_get_windows_focused_space)

  for window_id in $windows; do
    local window_handle="window.$space_id.$window_id"

    # add window
    sketchy --add item "$window_handle" q
    sketchybar --set "$window_handle" script="$CLICK_HANDLER" \
      --subscribe "$window_handle" mouse.clicked

    # style window
    local app_name=$(yabai_get_window_app_name "$window_id")
    local icon=$($CONFIG_DIR/icon_map.sh "$app_name")
    local window_props=(
      label.drawing=off
      icon.font="$ICON_FONT:$ICON_FONTSIZE"
      icon="$icon"
    )
    sketchybar --set "$window_handle" "${window_props[@]}"
  done
  cache_windows "$space_id" $windows
}

remove_windows() {
  local cached_windows=()

  while IFS= read -r line; do
    cached_windows+=("$line")
  done <"$WINDOWS_CACHE_FILE"

  for window_handle in "${cached_windows[@]}"; do
    sketchybar --remove "$window_handle"
  done
}

main() {
  remove_windows
  display_windows
}

main
