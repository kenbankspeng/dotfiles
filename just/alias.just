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

# new cat
@cat *args:
  bat {{ args }}

# new code
@code *args:
  cursor {{ args }}
  
# yazi wrapper - so it can exit to a chosen directory
yy *args:
  #!/usr/bin/env bash
  tmp="$(mktemp -t "yazi-cwd.XXXXXX")"
  yazi "$@" --cwd-file="$tmp"
  if cwd="$(cat -- "$tmp")" && [ -n "$cwd" ] && [ "$cwd" != "$PWD" ]; then
    builtin cd -- "$cwd"
  fi
  rm -f -- "$tmp"
  

