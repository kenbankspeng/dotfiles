set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/json.just" --list | zsh -c "$JUSTGREP"

############  JSON UTIL  ############

# jq json processing
jsn *args:
  jq {{args}}

# yq: jq-like for yaml, json, xml, properties, csv and tsv
yaml *args:
  yq {{args}}

# jid: json interactive digger
jd *args:
  jid {{args}}

# fx json viewer
jv *args:
  fx {{args}}

# jnv json navigator
jnav *args:
  jnv {{args}}


