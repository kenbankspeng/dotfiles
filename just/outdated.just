set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/outdated.just --list | zsh -c "$JUSTGREP"

# outdated
outdated:
  brew outdated --greedy
  mise list
  rustup check
  cargo install-update --list
  bun -g pm ls
