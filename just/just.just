# for justfiles, by default each command runs in a separate shell
# use shebangs when multiple commands must run in same shell
# if arg can be filename with spaces, use "{{args}}"
# no need to deactivate venvs since shell will end after command

set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST"/just.just --list | zsh -c "$JUSTGREP"

# editors
mod edit

# quick launch 
mod q

# homebrew
mod brew

# utilities
mod util

# tui apps
mod tui

# linux file util
mod unix

# json util
mod json

# disk util
mod disk
