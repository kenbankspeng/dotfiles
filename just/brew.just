set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/brew.just" --list | zsh -c "$JUSTGREP"

# tree of casks and formulas
@brew-tree:
  echo "{{purple}}CASK APPS"
  echo "---------{{blue}}"
  brew list --cask
  echo
  echo "{{purple}}FORMULAS"
  echo "--------{{cyan}}"
  brew leaves | xargs brew deps --tree

# versions
@brew-versions: 
  echo "{{purple}}CASK APPS"
  echo "---------{{blue}}"
  brew list --versions --cask
  echo
  echo "{{purple}}FORMULA APPS"
  echo "------------{{cyan}}"
  brew list --versions --formula

# installed by user
@brew-leaves:
  echo "{{purple}}FORMULAS INSTALLED ON REQUEST"
  echo "-----------------------------{{cyan}}"
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
