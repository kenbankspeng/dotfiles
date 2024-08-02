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


