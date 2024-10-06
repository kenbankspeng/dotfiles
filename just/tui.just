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

# top tui
top:
  htop

