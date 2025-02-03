set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/shell.just" --list | zsh -c "$JUSTGREP"

#############  SHELL  ##############

# list shells
@list:
  echo "shells:"
  echo "  bash(linix), zsh(macos), powershell(windows), ksh(unix), sh(og), dash(minimal)"
  echo "  ysh(modern), nu(modern), fish(modern)"
