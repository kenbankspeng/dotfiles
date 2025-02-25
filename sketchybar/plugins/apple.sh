#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"


WALLPAPPER_CACHE="$CACHE_DIR/wallpaper"

set_cache(){
  local state=$1
  echo "$state" > "$WALLPAPPER_CACHE"
}

get_cache(){
  cat "$WALLPAPPER_CACHE"
}

set_wallpaper_solid(){
  wallpaper set-solid-color "#1e1e2e"
  set_cache "solid"
}

set_wallpaper_nasa(){
  # Download the image and wait for it to complete
  url=$(command curl -s "https://api.nasa.gov/planetary/apod?api_key=$NASA_API_KEY" | jq -r .url)
  curl -o "$CONFIG_DIR/wallpapers/wallpaper.jpg" "$url"

  # Copy the wallpaper to the wallpapers directory with today's date
  TODAY=$(date +"%Y-%m-%d")
  cp "$CONFIG_DIR/wallpapers/wallpaper.jpg" "$CONFIG_DIR/wallpapers/wallpaper_$TODAY.jpg"

  # Set the wallpaper
  wallpaper set "$CONFIG_DIR/wallpapers/wallpaper.jpg"
  set_cache "nasa"
}

confetti() {
  afplay "$CONFIG_DIR/plugins/helpers/Cheer.wav" &
  open "raycast://extensions/raycast/raycast/confetti" &
}

toggle_wallpaper() {
  if [ $(get_cache) = "solid" ]; then
    set_wallpaper_nasa
  else
    set_wallpaper_solid
  fi
}

if [ "$SENDER" = "forced" ]; then
  set_cache "nasa"
elif [ "$SENDER" = "routine" ]; then
  set_wallpaper_nasa
elif [ "$BUTTON" = "left" ]; then
  sketchybar --reload
elif [ "$BUTTON" = "right" ]; then
  toggle_wallpaper
  confetti
fi
