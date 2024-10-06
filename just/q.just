#set shell := ['zsh', '-cu']

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
n:
  nvim

# nano tui
@nano:
  nano

#####################   QUICKIES   #####################

# disk usage tui
d:
  ncdu

# outdated
@o:
  echo "---------------"
  echo "     BREW"
  echo "---------------"
  brew outdated --greedy
  echo
  echo "---------------"
  echo "     MISE"
  echo "---------------"
  mise list
  echo
  echo "---------------"
  echo "     RYE"
  echo "---------------"
  rye self update
  echo
  echo "---------------"
  echo "     RUSTUP"
  echo "---------------"
  rustup check
  echo
  echo "---------------"
  echo "     CARGO"
  echo "---------------"
  cargo install-update -a
  echo
  echo "---------------"
  echo "     BUN"
  echo "---------------"
  bun -g pm ls
  echo "---------------"

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

