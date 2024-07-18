set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/util.just" --list | zsh -c "$JUSTGREP"

#####################   SHELL   #####################

# multiplex github accounts
@github:
  cp ~/.config/gh/hosts.yml.$1 ~/.config/gh/hosts.yml
  gh auth status

# bundleid "Visual Studio Code"
@bundleid arg: 
  mdls -name kMDItemCFBundleIdentifier "/Applications/{{arg}}.app"
  mdls -name kMDItemCFBundleIdentifier "{{arg}}"

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

# transition to: pastel color <color>
@color one two *rest:
  node "$NODE_SCRIPTS/color/color.mjs" {{ one }} "{{ two }}" {{ rest }}
