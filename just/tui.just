set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/tui.just --list | zsh -c "$JUSTGREP"

# tui neovide editor
@edit *args:
  neovide {{ args }}

# markdown viewer
@glo *args:
  glow {{ args }}

# tui git
@g *args:
  lazygit {{ args }}

# tui ssh client
@s *args:
  sshs {{ args }}

# tui file transfer (portal)
@p *args:
  portal {{ args }}

# tui api client (atac)
@a:
  atac --directory "$HOME"/.local/share/atac

