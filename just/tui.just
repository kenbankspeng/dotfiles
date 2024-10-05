set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/tui.just --list | zsh -c "$JUSTGREP"

# markdown viewer
@glo:
  glow

# tui ssh client
@ss:
  sshs

# tui file transfer (portal)
@pl:
  portal

# tui api client (atac)
@at:
  atac --directory "$HOME"/.local/share/atac

# top tui
@top:
  htop

