local builtin = require('telescope.builtin')
local themes = require('telescope.themes')

local function fzf_current_buffer()
  return builtin.current_buffer_fuzzy_find(themes.get_dropdown({ winblend = 10, previewer = false }))
end

local function live_grep()
  return builtin.live_grep({
    grep_open_files = true,
    prompt_title = 'Live Grep in Open Files',
  })
end

local function find_files() return builtin.find_files({ cwd = vim.fn.stdpath('config') }) end

return {
  fzf_current_buffer = fzf_current_buffer,
  live_grep = live_grep,
  find_files = find_files,
}
