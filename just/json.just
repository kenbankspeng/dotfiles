set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/json.just" --list | zsh -c "$JUSTGREP"

############  JSON UTIL  ############

# jq json processing
jsn:
  jq

# yq: jq-like for yaml, json, xml, properties, csv and tsv
yaml:
  yq

# json viewer
json:
  fx

# json navigator
jnav:
  jnv


