set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/alias.just --list | zsh -c "$JUSTGREP"

#####################   SHELL   #####################

# git origin
@gr:
  git remote -v

#scripts
@scripts:
  code "$DEV_BOX"

#new ls
@ls *args:
  lsd {{ args }}

# new cat
@cat *args:
  bat {{ args }}

# new code
@code *args:
  cursor {{ args }}
  
# browse code
@browse *args:
  yazi {{ args }}
  