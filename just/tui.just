set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/tui.just --list | zsh -c "$JUSTGREP"

##################  TUIs  ####################

# ssh client tui
ss:
  sshs

# file transfer (portal) tui
pl:
  portal

# api client (atac) tui
at:
  atac --directory "$HOME"/.local/share/atac

# visidata
vd *args:
  visidata {{args}}

# lazydocker
ld:
  lazydocker

# shell cheatsheet
cs:
  navi

# terminal mux
tm:
  zellij

