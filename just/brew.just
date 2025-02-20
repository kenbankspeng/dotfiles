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


#   echo "length: ${#a[@]}"
#   echo "1: ${a[1]}"
#   echo "2: ${a[2]}"

# brew list / leaves
bl *$args:
  #! /usr/bin/env zsh
  a=(${=args})
  len=${#a[@]}
  a1=${a[1]}

  echo "args: $args"
  echo "len: $len"
  echo "a1: $a1"

  if [ $len = 0 ]; then
    print "brew leaves"
    print
    print "{{BrightMagenta}}USER-INSTALLED LEAF FORMULAS"
    print -- "----------------------------{{BrightCyan}}"
    brew leaves --installed-on-request
  elif [ $len = 1 ] && [ "$a1" = "all" ]; then
    print "brew list"
    print
    brew list
  elif [ $len = 1 ] && [ -z "$a1" ]; then
    print "brew list"
    print
    brew list
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
