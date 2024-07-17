set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/alias.just --list | zsh -c "$JUSTGREP"

#####################   SHELL   #####################

# git origin
@git-remote:
  git remote -v

#scripts
@scripts:
  code "$DEV_BOX"

# neovim client-server
@neo *args:
    #!/usr/bin/env zsh
    . "$PYTHON_SCRIPTS/neo/.venv/bin/activate"
    python -m neo {{ args }}

# original ls
@lss *args:
  /bin/ls {{ args }}

@ls *args:
  lsd {{ args }}
