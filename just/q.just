set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/q.just" --list | zsh -c "$JUSTGREP"

#####################   QUICKIES   #####################

# outdated
@o:
  print "{{BrightMagenta}}BREW"
  print -- "----{{BrightBlue}}"
  brew outdated --greedy
  print
  print "{{BrightMagenta}}MISE"
  print -- "----{{BrightBlue}}"
  mise outdated
  print
  print "{{BrightMagenta}}RYE"
  print -- "---{{BrightBlue}}"
  rye self update
  print
  print "{{BrightMagenta}}RUSTUP"
  print -- "------{{BrightBlue}}"
  rustup check
  print
  print "{{BrightMagenta}}CARGO"
  print -- "-----{{BrightBlue}}"
  cargo install-update -a
  print
  print "{{BrightMagenta}}BUN"
  print -- "---{{BrightBlue}}"
  bun -g pm ls

# watch a directory/file for changes 
w:
  watch

# x GET 'https://api.open-meteo.com/v1/forecast' latitude==42.9849 longitude==-81.2453 current_weather==true
# send http requests
x:
  xh


# terminal mux
z:
  zellij

