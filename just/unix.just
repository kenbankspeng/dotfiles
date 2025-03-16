set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/unix.just" --list | zsh -c "$JUSTGREP"

############  UNIX UTIL  ############

# new copy
cp *args:
  ditto {{args}}

# sed alternative for find/replace withing files
sed2 *args:
  sd {{args}}

# sed alternative with fzf
sed3 *args:
  sad {{args}}

# new grep for find within glob pattern
@gr *args:
  print "rg (ripgrep)"
  print
  rg {{args}}

# new man
@man *args:
  print "tldr (tealdeer)"
  tldr {{ args }}

# do not show hidden
l *args:
  #!/usr/bin/env zsh
  if git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    lsd --ignore-config --no-symlink --blocks name --blocks git {{args}}
  else
    lsd --ignore-config --no-symlink -1
  fi

# new ls (git aware)
#
# git symbols
# -----------
# - : default
# . : unmodified
# N : new in index
# ? : new in work directory
# D : deleted
# M : modified
# R : renamed
# I : ignored
# T : type change
# C : conflict
ls *args:
  #!/usr/bin/env zsh
  if git rev-parse --is-inside-work-tree > /dev/null 2>&1; then
    lsd -al --blocks name --blocks git {{args}}
  else
    lsd {{args}}
  fi

# new ls (tree + git)
@lt *args:
  lsd --tree --no-symlink --depth 2 -al --blocks name --blocks git {{args}}

# new ls (long + all + git)
@ll *args:
  lsd -al --no-symlink --blocks name --blocks git --blocks permission --blocks user --blocks size --blocks date {{args}}

# new cat
@cat *args:
  bat {{args}}

# new ps
process *args:
  procs {{args}}

# top tui
top:
  htop

# top tui
top2:
  btm

# bandwidth util
bw:
  bandwich

# more readable path. duplicates in red.
path:
  #!/usr/bin/env zsh
  print $PATH | tr ':' '\n' | awk '{
    count[$0]++
    paths[NR] = $0
  }
  END {
      for (i = 1; i <= NR; i++) {
          if (count[paths[i]] > 1) {
              printf "\033[31m%s\033[0m\n", paths[i]
          } else {
              print paths[i]
          }
      }
  }'

# watch a directory/file for changes
w:
  watch

# remove .DS_store
@clean:
  print "recursively remove .DS_store and .node_modules"
  fd --unrestricted '^\.DS_Store$' --type file --exec-batch rm
  fd --unrestricted '^node_modules$' --type directory --exec-batch rm -rf

# remove .DS_store
@sudoclean:
  print "powerfully recursively remove .DS_store and .node_modules"
  sudo fd --unrestricted '^\.DS_Store$' --type file --exec-batch rm
  sudo fd --unrestricted '^node_modules$' --type directory --exec-batch rm -rf

# rm -rf
@zap *args:
  rm -rf {{args}}

# new find
find *args:
  fd -uuu {{args}}
