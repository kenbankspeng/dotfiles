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
  print "---------------"
  print "     BREW"
  print "---------------"
  brew outdated --greedy
  print
  print "---------------"
  print "     MISE"
  print "---------------"
  mise list
  print
  print "---------------"
  print "     RYE"
  print "---------------"
  rye self update
  print
  print "---------------"
  print "     RUSTUP"
  print "---------------"
  rustup check
  print
  print "---------------"
  print "     CARGO"
  print "---------------"
  cargo install-update -a
  print
  print "---------------"
  print "     BUN"
  print "---------------"
  bun -g pm ls
  print "---------------"

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

