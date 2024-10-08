set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/edit.just" --list | zsh -c "$JUSTGREP"

#####################   EDITORS   #####################

# list just modules

# new vscode
code:
  cursor .

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
@mic *args:
  micro {{args}}

# yazi file manager tui
y *args:
  yazi {{args}}

