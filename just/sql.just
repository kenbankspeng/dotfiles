set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/sql.just" --list | zsh -c "$JUSTGREP"

############  SQL  ############

# sqlite3 db
sql3 *args:
  sqlite3 {{args}}

