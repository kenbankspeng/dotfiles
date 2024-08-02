set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/alias.just --list | zsh -c "$JUSTGREP"

#####################   SHELL   #####################

# git origin
@gr:
  git remote -v

# edit scripts in cursor
@scripts:
  cursor "$DEV_BOX"

# new ls
@ls *args:
  lsd {{ args }}

# new ls -al
@l *args:
  lsd -al {{ args }}

# new cat
@cat *args:
  bat {{ args }}

# new code
@code *args:
  cursor {{ args }}
