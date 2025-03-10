set shell := ['zsh', '-cu']

import 'colors.just'

default:
  @just --justfile "$JUST/brew.just" --list | zsh -c "$JUSTGREP"

#############  PACKAGE MANAGERS  ##############

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

@v:
  #!/usr/bin/env zsh 
  {
    print "brew list --versions"
    print
    print "{{BrightMagenta}}CASK APPS"
    print -- "---------{{BrightBlue}}"
    brew list --versions --cask || print "{{BrightRed}}No cask apps found{{BrightCyan}}"
    print
    print "{{BrightMagenta}}FORMULA APPS"
    print -- "------------{{BrightCyan}}"
    brew list --versions --formula || print "{{BrightRed}}No formula apps found{{BrightCyan}}"
  } > "$DOTFILES/versions.txt"
