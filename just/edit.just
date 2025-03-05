set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/edit.just" --list | zsh -c "$JUSTGREP"

#####################   EDITORS   #####################


# edit current directory
e:
  cursor .

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
