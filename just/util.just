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

# shell linter
sc *args:
  shellcheck {{args}}

# multiplex github accounts
@github:
  cp ~/.config/gh/hosts.yml.$1 ~/.config/gh/hosts.yml
  gh auth status

# bundleid "Visual Studio Code"
@bundleid arg:
  osascript -e 'id of app "{{arg}}"'
  # mdls -name kMDItemCFBundleIdentifier "{{arg}}"

# git origin
gr:
  git remote -v

# edit scripts in cursor
@scripts:
  cursor "$DEV_BOX"

# melody language to regex
mel *args:
  melody {{args}}

# code refactoring
ast *args:
  ast-grep {{args}}

# local task mgr
tsk *args:
  task {{args}}

# rainbow text
lc *args:
  lolcat {{args}}

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

# color utils
pas *args:
  pastel {{args}}

# pastel color <color>
color *args:
  pastel color {{ args }}

#####################    RUBY    #####################

# ascii doc
ad *args:
  asciidoctor {{args}}

