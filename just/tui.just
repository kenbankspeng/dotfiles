set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/tui.just --list | zsh -c "$JUSTGREP"

# tui editor
@e *args:
  nvim {{ args }}

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

