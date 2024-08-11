-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
-- See `:help vim.keymap.set()`

-- local deleteKeys = require('config.helpers.deleteKeys')
-- deleteKeys('n')
-- local logKeys = require('config.helpers.logKeys')
-- logKeys('n', '/Users/ken/Documents/Software/DevBox/dotfiles/nvim/lua/debug.txt')

-- local diagnostic = vim.diagnostic

local map = vim.keymap.set




-- vim.keymap.set('n', '<Esc>', '<cmd>nohlsearch<CR>')

-- vim.keymap.set('n', '<leader>q', vim.diagnostic.setloclist, { desc = 'Open diagnostic [Q]uickfix list' })


-- vim.keymap.set('t', '<Esc><Esc>', '<C-\\><C-n>', { desc = 'Exit terminal mode' })

-- --  See `:help wincmd` for a list of all window commands
-- vim.keymap.set('n', '<C-h>', '<C-w><C-h>', { desc = 'Move focus to the left window' })
-- vim.keymap.set('n', '<C-l>', '<C-w><C-l>', { desc = 'Move focus to the right window' })
-- vim.keymap.set('n', '<C-j>', '<C-w><C-j>', { desc = 'Move focus to the lower window' })
-- vim.keymap.set('n', '<C-k>', '<C-w><C-k>', { desc = 'Move focus to the upper window' })

-- { '<leader>lg', '<cmd>LazyGit<cr>', desc = 'LazyGit' },

-- -- See `:help telescope.builtin`
-- local builtin = require 'telescope.builtin'
-- vim.keymap.set('n', '<leader>sh', builtin.help_tags, { desc = '[S]earch [H]elp' })
-- vim.keymap.set('n', '<leader>sk', builtin.keymaps, { desc = '[S]earch [K]eymaps' })
-- vim.keymap.set('n', '<leader>sf', builtin.find_files, { desc = '[S]earch [F]iles' })
-- vim.keymap.set('n', '<leader>ss', builtin.builtin, { desc = '[S]earch [S]elect Telescope' })
-- vim.keymap.set('n', '<leader>sw', builtin.grep_string, { desc = '[S]earch current [W]ord' })
-- vim.keymap.set('n', '<leader>sg', builtin.live_grep, { desc = '[S]earch by [G]rep' })
-- vim.keymap.set('n', '<leader>sd', builtin.diagnostics, { desc = '[S]earch [D]iagnostics' })
-- vim.keymap.set('n', '<leader>sr', builtin.resume, { desc = '[S]earch [R]esume' })
-- vim.keymap.set('n', '<leader>s.', builtin.oldfiles, { desc = '[S]earch Recent Files ("." for repeat)' })
-- vim.keymap.set('n', '<leader>fb', builtin.buffers, { desc = '[F]ind existing [B]uffers' })

-- -- Slightly advanced example of overriding default behavior and theme
-- vim.keymap.set('n', '<leader>/', function()
--   -- You can pass additional configuration to Telescope to change the theme, layout, etc.
--   builtin.current_buffer_fuzzy_find(require('telescope.themes').get_dropdown {
--     winblend = 10,
--     previewer = false,
--   })
-- end, { desc = '[/] Fuzzily search in current buffer' })

-- -- It's also possible to pass additional configuration options.
-- --  See `:help telescope.builtin.live_grep()` for information about particular keys
-- vim.keymap.set('n', '<leader>s/', function()
--   builtin.live_grep {
--     grep_open_files = true,
--     prompt_title = 'Live Grep in Open Files',
--   }
-- end, { desc = '[S]earch [/] in Open Files' })

-- -- Shortcut for searching your Neovim configuration files
-- vim.keymap.set('n', '<leader>sn', function()
--   builtin.find_files { cwd = vim.fn.stdpath 'config' }
-- end, { desc = '[S]earch [N]eovim files' })




















-- OIL --
map("n", "<leader><leader>", "<cmd>Oil --float<CR>", { desc = 'open parent directory' })

-- TELESCOPE --
map('<leader>D', require('telescope.builtin').lsp_type_definitions, 'Type [D]efinition')
map('<leader>ds', require('telescope.builtin').lsp_document_symbols, '[D]ocument [S]ymbols')
map('<leader>ws', require('telescope.builtin').lsp_dynamic_workspace_symbols, '[W]orkspace [S]ymbols')
map('gI', require('telescope.builtin').lsp_implementations, '[G]oto [I]mplementation')
map('gd', require('telescope.builtin').lsp_definitions, '[G]oto [D]efinition')
map('gD', vim.lsp.buf.declaration, '[G]oto [D]eclaration')
map('gr', require('telescope.builtin').lsp_references, '[G]oto [R]eferences')

-- LSP --
map('<leader>ca', vim.lsp.buf.code_action, '[C]ode [A]ction')
map('<leader>rn', vim.lsp.buf.rename, '[R]e[n]ame')

-- YAZI --
map("n", "<leader>y.", "<cmd>Yazi<CR>", { desc = "Open yazi at the current file" })      -- YAZI --
map("n", "<leader>yy", "<cmd>Yazi cwd<CR>", { desc = "Open yazi at working directory" }) -- YAZI --




-- NVIM/LAZY DEFAULTS --

-- GENERAL --
-- <Esc>                                  <Cmd>noh<CR><Esc>                                  Escape and Clear hlsearch
-- fn                                     <Cmd>enew<CR>                                      New File
-- cf                                     No command                                         Format
-- <C-S>                                  <Cmd>w<CR><Esc>                                    Save File
-- qq                                     <Cmd>qa<CR>                                        Quit All
-- ul                                     No command                                         Toggle Line Numbers
-- uL                                     No command                                         Toggle Relative Number
-- uw                                     No command                                         Toggle Wrap
-- us                                     No command                                         Toggle Spelling
-- uF                                     No command                                         Toggle Auto Format (Buffer)
-- uf                                     No command                                         Toggle Auto Format (Global)
-- uh                                     No command                                         Toggle Inlay Hints
-- ub                                     No command                                         Toggle Background
-- uT                                     No command                                         Toggle Treesitter Highlight
-- uc                                     No command                                         Toggle conceallevel
-- up                                     No command                                         Toggle Mini Pairs


-- NOT_SURE --
-- uI                                     <Cmd>InspectTree<CR>                               Inspect Tree
-- ui                                     No command                                         Inspect Pos
-- xq                                     <Cmd>copen<CR>                                     Quickfix List
-- xl                                     <Cmd>lopen<CR>                                     Location List
-- K                                      <Cmd>norm! K<CR>                                   Keywordprg
-- ur                                     <Cmd>nohlsearch|diffupdate|normal! <C-L><CR>       Redraw / Clear hlsearch / Diff Update
-- ,                                      No command                                         No description
-- ;                                      No command                                         No description
-- F                                      No command                                         No description
-- T                                      No command                                         No description
-- f                                      No command                                         No description
-- t                                      No command                                         No description
-- <C-_>                                  No command                                         which_key_ignore
-- gx                                     No command                                         Opens filepath or URI under cursor with the system handler (file explorer, web browser, …)


-- GIT --
-- gB                                     No command                                         Git Browse
-- gb                                     No command                                         Git Blame Line
-- gG                                     No command                                         Lazygit (cwd)
-- gg                                     No command                                         Lazygit (Root Dir)
-- gL                                     No command                                         Lazygit Log (cwd)
-- gl                                     No command                                         Lazygit Log
-- gf                                     No command                                         Lazygit Current File History


-- HELP --
-- &                                      :&&<CR>                                            :help &-default
-- Y                                      y$                                                 :help Y-default


-- NAVIGATION --
-- j                                      v:count == 0 ? 'gj' : 'j'                          Down
-- k                                      v:count == 0 ? 'gk' : 'k'                          Up
-- <M-k>                                  <Cmd>m .-2<CR>==                                   Move Up
-- <M-j>                                  <Cmd>m .+1<CR>==                                   Move Down
-- <Up>                                   v:count == 0 ? 'gk' : 'k'                          Up
-- <Down>                                 v:count == 0 ? 'gj' : 'j'                          Down
-- g]                                     No command                                         Move to right "around"
-- g[                                     No command                                         Move to left "around"


-- WINDOWS --
-- bD                                     <Cmd>:bd<CR>                                       Delete Buffer and Window
-- bd                                     No command                                         Delete Buffer
-- `                                      <Cmd>e #<CR>                                       Switch to Other Buffer
-- bb                                     <Cmd>e #<CR>                                       Switch to Other Buffer
-- w                                      <C-W>                                              Windows
-- |                                      <C-W>v                                             Split Window Right
-- -                                      <C-W>s                                             Split Window Below
-- wm                                     No command                                         Toggle Maximize
-- wd                                     <C-W>c                                             Delete Window
-- <C-L>                                  <C-W>l                                             Go to Right Window
-- <C-K>                                  <C-W>k                                             Go to Upper Window
-- <C-J>                                  <C-W>j                                             Go to Lower Window
-- <C-H>                                  <C-W>h                                             Go to Left Window
-- <C-Right>                              <Cmd>vertical resize +2<CR>                        Increase Window Width
-- <C-Left>                               <Cmd>vertical resize -2<CR>                        Decrease Window Width
-- <C-Down>                               <Cmd>resize -2<CR>                                 Decrease Window Height
-- <C-Up>                                 <Cmd>resize +2<CR>                                 Increase Window Height


-- TABS/BUFFERS --
-- H                                      <Cmd>bprevious<CR>                                 Prev Buffer
-- L                                      <Cmd>bnext<CR>                                     Next Buffer
-- ]b                                     <Cmd>bnext<CR>                                     Next Buffer
-- <Tab>[                                 <Cmd>tabprevious<CR>                               Previous Tab
-- <Tab>d                                 <Cmd>tabclose<CR>                                  Close Tab
-- <Tab>]                                 <Cmd>tabnext<CR>                                   Next Tab
-- <Tab><Tab>                             <Cmd>tabnew<CR>                                    New Tab
-- <Tab>f                                 <Cmd>tabfirst<CR>                                  First Tab
-- <Tab>o                                 <Cmd>tabonly<CR>                                   Close Other Tabs
-- <Tab>l                                 <Cmd>tablast<CR>                                   Last Tab


-- TERMINAL --
-- fT                                     No command                                         Terminal (cwd)
-- ft                                     No command                                         Terminal (Root Dir)
-- <C-/>                                  No command                                         Terminal (Root Dir)
map('t', '<Esc><Esc>', '<C-\\><C-n>', { desc = 'Exit terminal mode' })


-- TROUBLE --
-- [w                                     No command                                         Prev Warning
-- [e                                     No command                                         Prev Error
-- [q                                     No command                                         Previous Quickfix
-- [b                                     <Cmd>bprevious<CR>                                 Prev Buffer
-- ]w                                     No command                                         Next Warning
-- ]e                                     No command                                         Next Error
-- ]q                                     No command                                         Next Quickfix


-- SEARCH --
-- n                                      'Nn'[v:searchforward].'zv'                         Next Search Result
-- N                                      'nN'[v:searchforward].'zv'                         Prev Search Result


-- LAZY --
-- l                                      <Cmd>Lazy<CR>                                      Lazy
-- L                                      No command                                         LazyVim Changelog


-- COMMENTS --
-- gcO                                    O<Esc>Vcx<Esc><Cmd>normal gcc<CR>fxa<BS>           Add Comment Above
-- gco                                    o<Esc>Vcx<Esc><Cmd>normal gcc<CR>fxa<BS>           Add Comment Below
-- gcc                                    No command                                         Toggle comment line
-- gc                                     No command                                         Toggle comment


-- DIAGNOSTICS --
-- cd                                     No command                                         Line Diagnostics
-- ud                                     No command                                         Toggle Diagnostics
-- [d                                     No command                                         Jump to the previous diagnostic
-- ]d                                     No command                                         Jump to the next diagnostic
-- <C-W><C-D>                             <C-W>d                                             Show diagnostics under the cursor
-- <C-W>d                                 No command                                         Show diagnostics under the cursor


-- MATCHIT --
-- <Plug>(MatchitNormalMultiForward)      :<C-U>call matchit#MultiMatch("W",  "n")<CR>       No description
-- <Plug>(MatchitNormalMultiBackward)     :<C-U>call matchit#MultiMatch("bW", "n")<CR>       No description
-- <Plug>(MatchitNormalBackward)          :<C-U>call matchit#Match_wrapper('',0,'n')<CR>     No description
-- <Plug>(MatchitNormalForward)           :<C-U>call matchit#Match_wrapper('',1,'n')<CR>     No description
-- g%                                     <Plug>(MatchitNormalBackward)                      No description
-- ]%                                     <Plug>(MatchitNormalMultiForward)                  No description
-- %                                      <Plug>(MatchitNormalForward)                       No description
-- [%                                     <Plug>(MatchitNormalMultiBackward)                 No description
