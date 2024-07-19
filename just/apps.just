set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/apps.just --list | zsh -c "$JUSTGREP"

# neovim server (-c client)
@neo *args:
    #!/usr/bin/env zsh
    . "$PYTHON_SCRIPTS/neo/.venv/bin/activate"
    python -m neo {{ args }}

@mux *args:
    tmux -f "$XDG_CONFIG_HOME/tmux/tmux.conf" {{ args }}