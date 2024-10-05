set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/brew.just" --list | zsh -c "$JUSTGREP"

#############  BREW  ##############

# brew tree of casks and formulas
@bt:
  echo "{{BrightMagenta}}CASK APPS"
  echo "---------{{BrightBlue}}"
  brew list --cask
  echo
  echo "{{BrightMagenta}}FORMULAS"
  echo "--------{{BrightCyan}}"
  brew leaves | xargs brew deps --tree

# brew versions
@bv: 
  echo "{{BrightMagenta}}CASK APPS"
  echo "---------{{BrightBlue}}"
  brew list --versions --cask
  echo
  echo "{{BrightMagenta}}FORMULA APPS"
  echo "------------{{BrightCyan}}"
  brew list --versions --formula

# brew list installed by user
@bl:
  echo "{{BrightMagenta}}LEAF FORMULAS INSTALLED BY USER"
  echo "-------------------------------{{BrightCyan}}"
  brew leaves --installed-on-request

# brew outdated
@bo:
  brew outdated --greedy --verbose

# brew upgrade
@bu:
  brew upgrade --greedy
  brew cleanup

# brew remove + autoremove + cleanup
@br arg:
  brew remove {{ arg }}
  brew autoremove
  brew cleanup
