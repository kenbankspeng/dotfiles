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
  -bun -g update

# brew versions
@bv *args:
  print "brew list --versions {{args}}"
  print
  print "{{BrightMagenta}}CASK APPS"
  print -- "---------{{BrightBlue}}"
  brew list --versions --cask {{args}} || print "{{BrightRed}}No cask apps found{{BrightCyan}}"
  print
  print "{{BrightMagenta}}FORMULA APPS"
  print -- "------------{{BrightCyan}}"
  brew list --versions --formula {{args}} || print "{{BrightRed}}No formula apps found{{BrightCyan}}"

# brew casks
@bc:
  print "brew list --casks"
  print
  print "{{BrightMagenta}}CASK APPS"
  print -- "---------{{BrightBlue}}"
  brew list --cask



# brew list / leaves
bl *$args:
  #! /usr/bin/env zsh
  a=(${=args})
  len=${#a[@]}
  a1=${a[1]}

  if [ $len = 1 ] && [ "$a1" = "leaves" ]; then
    print "brew leaves"
    print
    print "{{BrightMagenta}}USER-INSTALLED LEAF FORMULAS"
    print -- "----------------------------{{BrightCyan}}"
    brew leaves --installed-on-request
  else
    print "brew list {{args}}"
    print
    brew list --formula {{args}}
  fi

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

# brew tree (casks and formulas)
bt *args:
  #! /usr/bin/env zsh
  print "brew tree {{args}}"
  print
  print "{{BrightMagenta}}FORMULAS"
  print -- "--------{{BrightCyan}}"
  if [ -n "{{args}}" ]; then
    brew deps --tree --formula {{args}}
  else
    brew leaves | xargs brew deps --tree --formula
  fi


# brew packages that depend on
@bdo *args:
  print "brew packages that depend on" {{args}}
  print
  brew uses --installed {{args}}

# brew zap
bz:
  brew cleanup --prune=all
  rm -rf "$HOME/Library/Application Support/Caches"
  mkdir "$HOME/Library/Application Support/Caches"
  rm -rf "$HOME/.cache"
  mkdir "$HOME/.cache"
  go clean -modcache
