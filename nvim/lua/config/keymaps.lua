-- KEYMAPS - automatically loaded on the VeryLazy event

local map = function(keys, func, desc) vim.keymap.set('n', keys, func, { desc = desc, silent = true, noremap = true }) end

local keymapModules = {
  'lazy', -- must be first
  'tree',
  'diff',
  'bufferline',
  'nvim-wezterm',
  'nvim',
  'terminal',
  'diagnostics',
  'buffers',
  -- 'markdown',
}

for _, moduleName in ipairs(keymapModules) do
  require('config.keymaps.' .. moduleName)(map)
end
