#!/usr/bin/env bash

source "$CONFIG_DIR/env.sh"

if [ "$SENDER" = "mouse.clicked" ]; then
  # Get the wallpaper from NASA
  command curl --no-progress-meter "https://api.nasa.gov/planetary/apod?api_key=$NASA_API_KEY" | jq -r .url | xargs curl -o "$CONFIG_DIR/wallpapers/wallpaper.jpg"

  # Copy the wallpaper to the wallpapers directory with today's date
  TODAY=$(date +"%Y-%m-%d")
  cp "$CONFIG_DIR/wallpapers/wallpaper.jpg" "$CONFIG_DIR/wallpapers/wallpaper_$TODAY.jpg"

  # Set the wallpaper
  wallpaper set "$CONFIG_DIR/wallpapers/wallpaper.jpg"
fi
