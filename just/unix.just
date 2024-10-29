set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/unix.just" --list | zsh -c "$JUSTGREP"

############  UNIX UTIL  ############

# awk for processing delimited files
gawk *args:
  awk {{args}}
 
# sed alternative for find/replace withing files
sed *args:
  sd {{args}}

# new grep for find within glob pattern
@grep *args:
  print "rg (ripgrep)"
  print
  rg {{args}}

# new man
@man *args:
  print "tldr (tealdeer)"
  tldr {{ args }}

# get directory path
@gd *args:
  print $(command tere "$@")

# new ls (git aware)
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

# ps alternative
pr *args:
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

# x GET 'https://api.open-meteo.com/v1/forecast' latitude==42.9849 longitude==-81.2453 current_weather==true
# send http requests
x:
  xh

