-- Basic Keymaps
-- See `:help vim.keymap.set()`

local v = vim
local map = v.keymap.set
local diagnostic = v.diagnostic
local fn = v.fn
local cmd = v.cmd
local api = v.api

-- See `:help hlsearch`
-- map('n', '<Esc>', '<cmd>nohlsearch<CR>') -- Clear highlights on search
map("n", "<Esc>", "<cmd>noh<CR>", { desc = "general clear highlights" })

-- Diagnostic keymaps
map('n', '<leader>q', diagnostic.setloclist, { desc = 'Open diagnostic [Q]uickfix list' })

-- Exit terminal mode in the builtin terminal.
map('t', '<Esc><Esc>', '<C-\\><C-n>', { desc = 'Exit terminal mode' })

-- Use CTRL+<hjkl> to switch between windows
-- See `:help wincmd` for a list of all window commands
map('n', '<C-h>', '<C-w><C-h>', { desc = 'Move focus to the left window' })
map('n', '<C-l>', '<C-w><C-l>', { desc = 'Move focus to the right window' })
map('n', '<C-j>', '<C-w><C-j>', { desc = 'Move focus to the lower window' })
map('n', '<C-k>', '<C-w><C-k>', { desc = 'Move focus to the upper window' })

map("n", "<C-s>", "<cmd>w<CR>", { desc = "file save" })
map("n", "<C-c>", "<cmd>%y+<CR>", { desc = "file copy whole" })

map("n", "<leader>n", "<cmd>set nu!<CR>", { desc = "toggle line number" })
map("n", "<leader>rn", "<cmd>set rnu!<CR>", { desc = "toggle relative number" })
map("n", "<leader>ch", "<cmd>NvCheatsheet<CR>", { desc = "toggle nvcheatsheet" })

map("n", "<leader>fm", function()
  require("conform").format { lsp_fallback = true }
end, { desc = "format files" })

------ review keymaps ------

-- map("i", "<C-b>", "<ESC>^i", { desc = "move beginning of line" })
-- map("i", "<C-e>", "<End>", { desc = "move end of line" })

-- -- global lsp mappings
-- map("n", "<leader>ds", diagnostic.setloclist, { desc = "lsp diagnostic loclist" })

-- -- tabufline
-- map("n", "<leader>b", "<cmd>enew<CR>", { desc = "buffer new" })

-- map("n", "<tab>", function()
--   require("nvchad.tabufline").next()
-- end, { desc = "buffer goto next" })

-- map("n", "<S-tab>", function()
--   require("nvchad.tabufline").prev()
-- end, { desc = "buffer goto prev" })

-- map("n", "<leader>x", function()
--   require("nvchad.tabufline").close_buffer()
-- end, { desc = "buffer close" })

-- -- Comment
-- map("n", "<leader>/", "gcc", { desc = "comment toggle", remap = true })
-- map("v", "<leader>/", "gc", { desc = "comment toggle", remap = true })

-- -- nvimtree
-- map("n", "<C-n>", "<cmd>NvimTreeToggle<CR>", { desc = "nvimtree toggle window" })
-- map("n", "<leader>e", "<cmd>NvimTreeFocus<CR>", { desc = "nvimtree focus window" })

-- -- telescope
-- map("n", "<leader>fw", "<cmd>Telescope live_grep<CR>", { desc = "telescope live grep" })
-- map("n", "<leader>fb", "<cmd>Telescope buffers<CR>", { desc = "telescope find buffers" })
-- map("n", "<leader>fh", "<cmd>Telescope help_tags<CR>", { desc = "telescope help page" })
-- map("n", "<leader>ma", "<cmd>Telescope marks<CR>", { desc = "telescope find marks" })
-- map("n", "<leader>fo", "<cmd>Telescope oldfiles<CR>", { desc = "telescope find oldfiles" })
-- map("n", "<leader>fz", "<cmd>Telescope current_buffer_fuzzy_find<CR>", { desc = "telescope find in current buffer" })
-- map("n", "<leader>cm", "<cmd>Telescope git_commits<CR>", { desc = "telescope git commits" })
-- map("n", "<leader>gt", "<cmd>Telescope git_status<CR>", { desc = "telescope git status" })
-- map("n", "<leader>pt", "<cmd>Telescope terms<CR>", { desc = "telescope pick hidden term" })
-- map("n", "<leader>th", "<cmd>Telescope themes<CR>", { desc = "telescope nvchad themes" })
-- map("n", "<leader>ff", "<cmd>Telescope find_files<cr>", { desc = "telescope find files" })
-- map(
--   "n",
--   "<leader>fa",
--   "<cmd>Telescope find_files follow=true no_ignore=true hidden=true<CR>",
--   { desc = "telescope find all files" }
-- )

-- -- terminal
-- map("t", "<C-x>", "<C-\\><C-N>", { desc = "terminal escape terminal mode" })

-- -- new terminals
-- map("n", "<leader>h", function()
--   require("nvchad.term").new { pos = "sp" }
-- end, { desc = "terminal new horizontal term" })

-- map("n", "<leader>v", function()
--   require("nvchad.term").new { pos = "vsp" }
-- end, { desc = "terminal new vertical window" })

-- -- toggleable
-- map({ "n", "t" }, "<A-v>", function()
--   require("nvchad.term").toggle { pos = "vsp", id = "vtoggleTerm" }
-- end, { desc = "terminal toggleable vertical term" })

-- map({ "n", "t" }, "<A-h>", function()
--   require("nvchad.term").toggle { pos = "sp", id = "htoggleTerm" }
-- end, { desc = "terminal new horizontal term" })

-- map({ "n", "t" }, "<A-i>", function()
--   require("nvchad.term").toggle { pos = "float", id = "floatTerm" }
-- end, { desc = "terminal toggle floating term" })

-- -- whichkey
-- map("n", "<leader>wK", "<cmd>WhichKey <CR>", { desc = "whichkey all keymaps" })

-- map("n", "<leader>wk", function()
--   cmd("WhichKey " .. fn.input "WhichKey: ")
-- end, { desc = "whichkey query lookup" })

-- -- blankline
-- map("n", "<leader>cc", function()
--   local config = { scope = {} }
--   config.scope.exclude = { language = {}, node_type = {} }
--   config.scope.include = { node_type = {} }
--   local node = require("ibl.scope").get(api.nvim_get_current_buf(), config)

--   if node then
--     local start_row, _, end_row, _ = node:range()
--     if start_row ~= end_row then
--       api.nvim_win_set_cursor(api.nvim_get_current_win(), { start_row + 1, 0 })
--       api.nvim_feedkeys("_", "n", true)
--     end
--   end
-- end, { desc = "blankline jump to current context" })
