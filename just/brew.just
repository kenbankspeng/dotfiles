set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/brew.just" --list | zsh -c "$JUSTGREP"

#############  BREW  ##############

# brew tree (casks and formulas)
@bt:
  print "brew tree"
  print
  print "{{BrightMagenta}}CASK APPS"
  print -- "--------{{BrightBlue}}" # -- because "-..." interpreted as flag
  brew list --cask
  print
  print "{{BrightMagenta}}FORMULAS"
  print -- "--------{{BrightCyan}}"
  brew leaves | xargs brew deps --tree

# brew versions
@bv: 
  print "brew list --versions"
  print
  print "{{BrightMagenta}}CASK APPS"
  print -- "---------{{BrightBlue}}"
  brew list --versions --cask
  print
  print "{{BrightMagenta}}FORMULA APPS"
  print -- "------------{{BrightCyan}}"
  brew list --versions --formula

# brew leaves
@bl:
  print "brew leaves"
  print
  print "{{BrightMagenta}}USER-INSTALLED LEAF FORMULAS"
  print -- "----------------------------{{BrightCyan}}"
  brew leaves --installed-on-request

# brew outdated (greedy)
@bo:
  print "brew outdated (greedy)"
  print
  brew outdated --greedy --verbose

# brew upgrade (greedy)
@bu:
  print "brew upgrade (greedy) /w cleanup"
  print
  brew upgrade --greedy
  brew cleanup

# brew remove (w/ autoremove, cleanup)
@br *args:
  print "brew remove /w autoremove and cleanup"
  print
  brew remove {{ args }}
  brew autoremove
  brew cleanup
