set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/brew.just" --list | zsh -c "$JUSTGREP"

# tree of casks and formulas
@brew-tree:
  echo "{{BrightMagenta}}CASK APPS"
  echo "---------{{BrightBlue}}"
  brew list --cask
  echo
  echo "{{BrightMagenta}}FORMULAS"
  echo "--------{{BrightCyan}}"
  brew leaves | xargs brew deps --tree

# versions
@brew-versions: 
  echo "{{BrightMagenta}}CASK APPS"
  echo "---------{{BrightBlue}}"
  brew list --versions --cask
  echo
  echo "{{BrightMagenta}}FORMULA APPS"
  echo "------------{{BrightCyan}}"
  brew list --versions --formula

# installed by user
@brew-leaves:
  echo "{{BrightMagenta}}FORMULAS INSTALLED ON REQUEST"
  echo "-----------------------------{{BrightCyan}}"
  brew leaves --installed-on-request

# outdated
@brew-outdated:
  brew outdated --greedy --verbose

# upgrade
@brew-upgrade:
  brew cu --all --cleanup --force
  brew upgrade --formula
  brew cleanup

# remove with autoremove and cleanup
@brew-remove arg:
  brew remove {{ arg }}
  brew autoremove
  brew cleanup
