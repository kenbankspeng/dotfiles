set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/util.just" --list | zsh -c "$JUSTGREP"

#####################   SHELL   #####################

# 
# security procedure:
#   key-gen
#   cat file | key-enc <publickey> 
#   cat encrypted
#   cat encrypted | key-dec secret.key -> decrypted
#
# optional --armor formatting, -p passwords
#

# age wrapper 
@secure:
  . "$ZSH_SCRIPTS/secure.zsh"
  
# disk usage
disk:
  dust

# awk for processing delimited files
gawk:
  awk
 
# sed alternative for find/replace withing files
sed:
  sd

# shell linter
sc:
  shellcheck

# new grep for find within glob pattern
@grep *args:
  print "rg (ripgrep)"
  print
  rg {{args}}

# multiplex github accounts
@github:
  cp ~/.config/gh/hosts.yml.$1 ~/.config/gh/hosts.yml
  gh auth status

# bundleid "Visual Studio Code"
@bundleid arg:
  osascript -e 'id of app "{{arg}}"'
  # mdls -name kMDItemCFBundleIdentifier "{{arg}}"

# new man
@man *args:
  print "tldr"
  print
  tldr --config $XDG_CONFIG_HOME/tlrc/config.toml {{ args }}

# get directory path
@gd *args:
  print $(command tere "$@")

# json processing
jjq:
  jq

# jq-like for yaml, json, xml, properties, csv and tsv
@yyq:
  yq

# ps alternative
pr:
  procs

# git origin
gr:
  git remote -v

# edit scripts in cursor
@scripts:
  cursor "$DEV_BOX"

# new ls
@ls:
  lsd

# new ls -al
@la *args:
  lsd -al {{ args }}

# new cat
@cat:
  bat

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

#####################   PYTHON   #####################

# create symbolic link
@symlink:
  python "$PYTHON_SCRIPTS/symlink/symlink.py"

# pass source to be symlinked and 2 destinations
@switch *args:
  python "$PYTHON_SCRIPTS/switch/switch.py" {{ args }}

# switch 2 hammerspoon configs
@switch-hammerspoon: (switch "~/.hammerspoon" "/Users/ken/Documents/Software/DevBox/dotfiles/hammerspoon-config" "/Users/ken/Documents/Software/DevPlayground/lua/.hammerspoon")

# json cv to pdf
@cv *args:
  #!/usr/bin/env zsh
  . "$DEV_BOX/apps/cv-python/.venv/bin/activate"
  python -m cv {{ args }}


#####################    NODE    #####################

# mycolor <color>
@mycolor arg:
  zx "$NODE_SCRIPTS"/color/color.mjs -c "{{ arg }}"

# use pastel color <color> instead
color *args:
  pastel color {{ args }}

#####################    RUBY    #####################

# ascii doc
ad:
  asciidoctor

