set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/brew.just" --list | zsh -c "$JUSTGREP"

#############  BREW  ##############

# outdated
@o:
  print
  print "{{BrightMagenta}}BREW: mac apps, binaries"
  print -- "------------------------{{BrightBlue}}"
  brew outdated --greedy
  print
  print "{{BrightMagenta}}MISE: uv, bun, go, node, python, git"
  print -- "------------------------------------{{BrightBlue}}"
  mise --silent --yes self-update
  mise outdated --bump
  print
  print "{{BrightMagenta}}UV: python tools"
  print -- "----------------{{BrightBlue}}"
  uv tool upgrade --all
  print
  print "{{BrightMagenta}}GO: go tools"
  print -- "------------{{BrightBlue}}"
  print "gotools"
  gotools -u
  print
  print "{{BrightMagenta}}RUST/CARGO: rust packages"
  print -- "-------------------------{{BrightBlue}}"
  rustup check
  cargo install-update -a
  print
  print "{{BrightMagenta}}BUN: node js packages"
  print -- "---------------------{{BrightBlue}}"
  bun -g outdated 

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

# brew casks
@bc: 
  print "brew list --casks"
  print
  print "{{BrightMagenta}}CASK APPS"
  print -- "---------{{BrightBlue}}"
  brew list --cask

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

# brew search
@bs *args:
  print "brew search" {{args}}
  print
  brew search {{args}}


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

# brew tree for package
@btp *args:
  print "brew tree for package" {{args}}
  print
  brew deps --tree {{args}}

# brew packages that depend on
@bdo *args:
  print "brew packages that depend on" {{args}}
  print
  brew uses --installed {{args}}

