set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/outdated.just --list | zsh -c "$JUSTGREP"

 



