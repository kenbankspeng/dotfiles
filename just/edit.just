set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/edit.just" --list | zsh -c "$JUSTGREP"

#####################   EDITORS   #####################

# list just modules

# new vscode
code *args:
  #!/usr/bin/env zsh
  if [ -n "{{args}}" ]; then
    print "{{BrightMagenta}}cursor {{args}}"
    print
    cursor {{args}}
  else
    print "{{BrightMagenta}}cursor ."
    print
    cursor .
  fi

# git tui
g:
  lazygit

# neophyte editor
edit *args:
  neophyte {{args}}

# markdown tui
m *args:
  glow {{args}}

# nvim tui
n *args:
    nvim {{args}}

# micro tui
mic *args:
  micro {{args}}

# zed editor
z *args:
  #!/usr/bin/env zsh
  if [ -n "{{args}}" ]; then
    print "{{BrightMagenta}}zed {{args}}"
    print
    zed {{args}}
  else
    print "{{BrightMagenta}}zed ."
    print
    zed .
  fi
