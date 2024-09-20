set shell := ['zsh', '-cu']

# list all recipes
default:
  @just --justfile "$JUST"/outdated.just --list | zsh -c "$JUSTGREP"

# outdated
@outdated:
  echo "---------------"
  echo "     BREW"
  echo "---------------"
  brew outdated --greedy
  echo
  echo "---------------"
  echo "     MISE"
  echo "---------------"
  mise list
  echo
  echo "---------------"
  echo "     RYE"
  echo "---------------"
  rye self update
  echo
  echo "---------------"
  echo "     RUSTUP"
  echo "---------------"
  rustup check
  echo
  echo "---------------"
  echo "     CARGO"
  echo "---------------"
  cargo install-update --list
  echo
  echo "---------------"
  echo "     BUN"
  echo "---------------"
  bun -g pm ls
  echo "---------------"
 



