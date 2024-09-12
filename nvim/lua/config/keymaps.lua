-- KEYMAPS - automatically loaded on the VeryLazy event

local map = function(keys, func, desc) vim.keymap.set('n', keys, func, { desc = desc, silent = true, noremap = true }) end
require('config.keymaps.lazy')(map) -- must be first
require('config.keymaps.whichkey')(map)
require('config.keymaps.tree')(map)
require('config.keymaps.diff')(map)
require('config.keymaps.yazi')(map)
require('config.keymaps.bufferline')(map)
require('config.keymaps.nvim-wezterm')(map)
require('config.keymaps.nvim')(map)
require('config.keymaps.terminal')(map)
require('config.keymaps.diagnostics')(map)
require('config.keymaps.buffers')(map)
-- require('config.keymaps.markdown')(map)
