set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/q.just" --list | zsh -c "$JUSTGREP"

#####################   EDITORS   #####################

# list just modules

# new vscode
code:
  cursor .

# git tui
g:
  lazygit

# neophyte editor
edit:
  neophyte

# markdown tui
m:
  glow

# nvim tui
n *args:
  nvim {{args}}

# micro tui
@mic:
  micro

#####################   QUICKIES   #####################

# disk usage tui
d:
  ncdu

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

# yazi file manager tui
y:
  yazi

# terminal mux
z:
  zellij

