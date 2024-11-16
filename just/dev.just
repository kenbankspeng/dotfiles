set shell := ['zsh', '-cu']

default:
  @just --justfile "$JUST/dev.just" --list | zsh -c "$JUSTGREP"

############  DEV TOOLS  ############

# wails inint
[no-cd]
wi project:
  wails init -t svelte-ts -n {{project}}

# wails dev
[no-cd]
wd:
  wails dev

# wails build
[no-cd]
wb:
  wails build

# tailwind watch
[no-cd]
tw:
  bunx tailwindcss -i ./src/global.css -o ./src/style.css --watch

# shadcn ui init
[no-cd]
uii:
  bunx --bun shadcn@latest init

# shadcn ui add <component>
[no-cd]
uia component:
  bunx --bun shadcn@latest add {{component}}

# bun install
[no-cd]
i *libs:
  bun install {{libs}}

