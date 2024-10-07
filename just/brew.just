set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/brew.just" --list | zsh -c "$JUSTGREP"

#############  BREW  ##############

# brew tree (casks and formulas)
@bt:
  print "brew tree"
  print "{{BrightMagenta}}CASK APPS"
  print -- "--------{{BrightBlue}}" # -- because "-..." interpreted as flag
  brew list --cask
  print
  print "{{BrightMagenta}}FORMULAS"
  print -- "--------{{BrightCyan}}"
  brew leaves | xargs brew deps --tree

# brew versions
@bv: 
  print "{{BrightMagenta}}CASK APPS"
  print "---------{{BrightBlue}}"
  brew list --versions --cask
  print
  print "{{BrightMagenta}}FORMULA APPS"
  print "------------{{BrightCyan}}"
  brew list --versions --formula

# brew leaves
@bl:
  print "{{BrightMagenta}}LEAF FORMULAS INSTALLED BY USER"
  print "-------------------------------{{BrightCyan}}"
  brew leaves --installed-on-request

# brew outdated (greedy)
bo:
  brew outdated --greedy --verbose

# brew upgrade (greedy)
bu:
  brew upgrade --greedy
  brew cleanup

# brew remove (w/ autoremove, cleanup)
br arg:
  brew remove {{ arg }}
  brew autoremove
  brew cleanup
