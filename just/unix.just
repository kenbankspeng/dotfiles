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
  print "tldr"
  print
  tldr --config $XDG_CONFIG_HOME/tlrc/config.toml {{ args }}

# get directory path
@gd *args:
  print $(command tere "$@")

# new ls
@ls *args:
  lsd {{args}}

# new ls -al
@la *args:
  lsd -al {{ args }}

# new cat
@cat *args:
  bat {{args}}

# ps alternative
pr *args:
  procs {{args}}

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


