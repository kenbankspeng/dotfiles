set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/disk.just" --list | zsh -c "$JUSTGREP"

#####################   DISK   #####################

# disk usage tui
d1:
  ncdu

# disk usage
d2:
  dust

# disk usage
d3:
  dua i

d4:
  df -h
