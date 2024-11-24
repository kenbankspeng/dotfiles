#!/usr/bin/env bash

# env variables
export CACHE_DIR="$HOME/.cache/sketchybar"
export BRACKET_CACHE_FILE="$CACHE_DIR/space_bracket_cache"
export WINDOWS_CACHE_FILE="$CACHE_DIR/windows_cache"

export PLUGIN_DIR="$CONFIG_DIR/plugins"
export ITEM_DIR="$CONFIG_DIR/items"

export ICON_FONT="sketchybar-app-font:Regular"
export ICON_FONTSIZE=14
export FONT="SF Pro:Semibold"
export FONTSIZE=12

export BAR_WIDTH=40
export ITEM_HEIGHT=38
export ITEM_HEIGHT_WITH_LABEL=53
export ICON_PADDING_L=11
export LABEL_Y_OFFSET=-17
export SECTION=80

#
#
#  Icons
#
#

NET_WIFI_3=      # Icomoon - Wi-Fi connected - 3 bars
NET_WIFI_2=      # Icomoon - Wi-Fi connected - 2 bars
NET_WIFI_1=      # Icomoon - Wi-Fi connected - 1 bar
NET_HOTSPOT=􀉤     # SF Symbols - iPhone Wi-Fi hotspot connected
NET_USB=􀟜         # SF Symbols - iPhone USB hotspot connected
NET_THUNDERBOLT=􀒗 # SF Symbols - Thunderbolt bridge connected
NET_OFF=􀙈         # SF Symbols - Network disconnected or Wi-Fi turned off

APPLE_LOGO=􀣺 # SF Symbols

BATTERY_4=􀛨        # SF Symbols - full
BATTERY_3=􀺸        # SF Symbols - strong
BATTERY_2=􀺶        # SF Symbols - half
BATTERY_1=􀛩        # SF Symbols - low
BATTERY_0=􀛪        # SF Symbols - empty
BATTERY_CHARGING=􀢋 # SF Symbols - charging

DISK=􀥾 # SF Symbols - disk

LEGO=􀐛 # SF Symbols

BUTTON=􀆨 # SF Symbols
GRID=􀏝   # SF Symbols
STACK=􀏧  # SF Symbols

CPU=􀧓 # SF Symbols

CHECKMARK=􀆅 # SF Symbols

VOLUME_3=􀊨 # SF Symbols - wave 3
VOLUME_2=􀊦 # SF Symbols - wave 2
VOLUME_1=􀊤 # SF Symbols - wave 1
VOLUME_0=􀊢 # SF Symbols - muted

#
#
# Catppuccin Macchiato palette
#
#

export ROSEWATER=0xfff5e0dc
export FLAMINGO=0xfff2cdcd
export PINK=0xfff5c2e7
export MAUVE=0xffcba6f7
export RED=0xfff38ba8
export MAROON=0xffeba0ac
export PEACH=0xfffab387
export YELLOW=0xfff9e2af
export GREEN=0xffa6e3a1
export TEAL=0xff94e2d5
export SKY=0xff89dceb
export SAPPHIRE=0xff74c7ec
export BLUE=0xff89b4fa
export LAVENDER=0xffb4befe

export TEXT=0xffcdd6f4
export SUBTEXT1=0xffbac2de
export SUBTEXT0=0xffa6adc8
export OVERLAY2=0xff9399b2
export OVERLAY1=0xff7f849c
export OVERLAY0=0xff6c7086
export SURFACE2=0xff585b70
export SURFACE1=0xff45475a
export SURFACE0=0xff313244
export BASE=0xff1e1e2e
export MANTLE=0xff181825
export CRUST=0xff11111b

# Supplemental colors

export BLACK=0xff000000
export WHITE=0xffffffff
export GREY=0xff808080
export FAINT=0xff555555
export TRANSPARENT=0x00000000

# TODO:hard colors

# export COLOR_BLACK=0xe0282828
# export COLOR_RED=0xe0cc241d
# export COLOR_GREEN=0xe098971a
# export COLOR_YELLOW=0xe0d79921
# export COLOR_BLUE=0xe0458588
# export COLOR_MAGENTA=0xe0b16286
# export COLOR_CYAN=0xe0689d6a
# export COLOR_WHITE=0xe0a89984

# convenience variables

export ACCENT1=$TEAL
export ACCENT2=$MAROON
export ACCENT3=$BLUE
export ACCENT4=$PINK
export ACCENT5=$GREEN
export ACCENT6=$PEACH
export ACCENT7=$YELLOW
export ACCENT8=$SKY
export ACCENT9=$FLAMINGO
export ACCENT10=$SAPPHIRE
export ACCENTS=($ACCENT1 $ACCENT2 $ACCENT3 $ACCENT4 $ACCENT5 $ACCENT6 $ACCENT7 $ACCENT8 $ACCENT9 $ACCENT10)

export BAR=0xff303030
export off=$GREY
export on=$GREEN
