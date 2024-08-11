-- Keymaps are automatically loaded on the VeryLazy event

local map = function(keys, func, desc)
  vim.keymap.set('n', keys, func, { desc = desc })
end

-- NVIM/LAZY DEFAULTS -- shown in comments

-- OIL --
map('<leader><leader>', '<cmd>Oil --float<CR>', 'open parent directory') -- ok

-- YAZI --
map('<leader>y.', '<cmd>Yazi<CR>', 'Open yazi at the current file')      -- ok
map('<leader>yy', '<cmd>Yazi cwd<CR>', 'Open yazi at working directory') -- ok




-- GENERAL --
-- <Esc>                       <Cmd>noh<CR><Esc>                                  Escape and Clear hlsearch
-- <leader>fn -- ok            <Cmd>enew<CR>                                      New File
-- <C-S> -- ok                 <Cmd>w<CR><Esc>                                    Save File
-- <leader>qq -- ok            <Cmd>qa<CR>                                        Quit All
-- cf                          No command                                         Format
-- ul                          No command                                         Toggle Line Numbers
-- uL                          No command                                         Toggle Relative Number
-- uw                          No command                                         Toggle Wrap
-- us                          No command                                         Toggle Spelling
-- uF                          No command                                         Toggle Auto Format (Buffer)
-- uf                          No command                                         Toggle Auto Format (Global)
-- uh                          No command                                         Toggle Inlay Hints
-- ub                          No command                                         Toggle Background
-- uT                          No command                                         Toggle Treesitter Highlight
-- uc                          No command                                         Toggle conceallevel
-- up                          No command                                         Toggle Mini Pairs


-- NOT_SURE --
-- uI                          <Cmd>InspectTree<CR>                               Inspect Tree
-- ui                          No command                                         Inspect Pos
-- xq                          <Cmd>copen<CR>                                     Quickfix List
-- xl                          <Cmd>lopen<CR>                                     Location List
-- K                           <Cmd>norm! K<CR>                                   Keywordprg
-- ur                          <Cmd>nohlsearch|diffupdate|normal! <C-L><CR>       Redraw / Clear hlsearch / Diff Update
-- ,                           No command                                         No description
-- ;                           No command                                         No description
-- F                           No command                                         No description
-- T                           No command                                         No description
-- f                           No command                                         No description
-- t                           No command                                         No description
-- <C-_>                       No command                                         which_key_ignore
-- gx                          No command                                         Opens filepath or URI under cursor with the system handler (file explorer, web browser, …)

-- TABS/BUFFERS --
-- H  -- ok                    <Cmd>BufferLineCyclePrev<CR>                       Prev Buffer
-- L  -- ok                    <Cmd>BufferLineCycleNext<CR>                       Next Buffer
-- [b -- ok                    <Cmd>BufferLineCyclePrev<CR>                       Prev Buffer
-- ]b -- ok                    <Cmd>BufferLineCycleNext<CR>                       Next Buffer
-- <leader>bl -- ok            <Cmd>BufferLineCloseLeft<CR>                       Delete Buffers to the Left
-- <leader>br -- ok            <Cmd>BufferLineCloseRight<CR>                      Delete Buffers to the Right
-- <leader>bo -- ok            <Cmd>BufferLineCloseOthers<CR>                     Delete Other Buffers
-- <leader>bP -- ok            <Cmd>BufferLineGroupClose ungrouped<CR>            Delete Non-Pinned Buffers
-- <leader>bp -- ok            <Cmd>BufferLineTogglePin<CR>                       Toggle Pin

-- <leader><Tab>[    -- buggy? <Cmd>tabprevious<CR>                               Previous Tab
-- <leader><Tab>d    -- buggy? <Cmd>tabclose<CR>                                  Close Tab
-- <leader><Tab>]    -- buggy? <Cmd>tabnext<CR>                                   Next Tab
-- <leader><Tab><Tab> - buggy? <Cmd>tabnew<CR>                                    New Tab
-- <leader><Tab>f    -- buggy? <Cmd>tabfirst<CR>                                  First Tab
-- <leader><Tab>o    -- buggy? <Cmd>tabonly<CR>                                   Close Other Tabs
-- <leader><Tab>l    -- buggy? <Cmd>tablast<CR>                                   Last Tab


-- SEARCH --
-- ?   -- ok
-- n   -- ok                                  'Nn'[v:searchforward].'zv'                         Next Search Result
-- N   -- ok                                  'nN'[v:searchforward].'zv'                         Prev Search Result

-- TELESCOPE -- -- See `:help telescope.builtin`
local builtin = require 'telescope.builtin'
map('<leader>sh', builtin.help_tags, 'search [H]elp')                       -- ok
map('<leader>sk', builtin.keymaps, 'search [K]eymaps')                      -- ok
map('<leader>sf', builtin.find_files, 'search [F]iles')                     -- ok
map('<leader>ss', builtin.builtin, 'search [S]elect Telescope')             -- ok
map('<leader>sw', builtin.grep_string, 'search current [W]ord')             -- ok
map('<leader>sg', builtin.live_grep, 'search by [G]rep')                    -- ok
map('<leader>sd', builtin.diagnostics, 'search [D]iagnostics')              -- ok
map('<leader>sr', builtin.resume, 'search [R]esume')                        -- ok
map('<leader>s.', builtin.oldfiles, 'search Recent Files ("." for repeat)') -- ok
map('<leader>fb', builtin.buffers, '[F]ind existing [B]uffers')             -- ok

-- defined in lsp-nvim-lspconfig.lua as autocmd
--
-- gd                   telescope lsp_definitions                -- [G]oto [D]efinition
-- gr                   telescope lsp_references                 -- [G]oto [R]eferences
-- gI                   telescope lsp_implementations            -- [G]oto [I]mplementation
-- <leader>D            telescope lsp_type_definitions           -- Type [D]efinition
-- <leader>ds           telescope lsp_document_symbols           -- [D]ocument [S]ymbols
-- <leader>ws           telescope lsp_dynamic_workspace_symbols  -- [W]orkspace [S]ymbols
-- <leader>rn           vim.lsp.buf.rename                       -- [R]e[n]ame
-- <leader>ca           vim.lsp.buf.code_action                  -- [C]ode [A]ction
-- gD                   vim.lsp.buf.declaration                  -- [G]oto [D]eclaration

map('<leader>/', function()
  -- You can pass additional configuration to Telescope to change the theme, layout, etc.
  builtin.current_buffer_fuzzy_find(require('telescope.themes').get_dropdown {
    winblend = 10,
    previewer = false,
  })
end, '[/] Fuzzily search in current buffer')

map('<leader>s/', function()
  builtin.live_grep {
    grep_open_files = true,
    prompt_title = 'Live Grep in Open Files',
  }
end, '[S]earch [/] in Open Files')

map('<leader>sn', function()
  builtin.find_files { cwd = vim.fn.stdpath 'config' }
end, '[S]earch [N]eovim files')

--  :                    <Cmd>Telescope command_history<CR>                   Command History
--  ,                    <Cmd>Telescope buffers sort_lastused=true<CR>        Switch Buffer
--  <leader>sR           <Cmd>Telescope resume<CR>                            Resume
--  <leader>so           <Cmd>Telescope vim_options<CR>                       Options
--  <leader>sm           <Cmd>Telescope marks<CR>                             Jump to Mark
--  <leader>sM           <Cmd>Telescope man_pages<CR>                         Man Pages
--  <leader>sl           <Cmd>Telescope loclist<CR>                           Location List
--  <leader>sj           <Cmd>Telescope jumplist<CR>                          Jumplist
--  <leader>sH           <Cmd>Telescope highlights<CR>                        Search Highlight Groups
--  <leader>sD           <Cmd>Telescope diagnostics<CR>                       Workspace Diagnostics
--  <leader>sC           <Cmd>Telescope commands<CR>                          Commands
--  <leader>sc           <Cmd>Telescope command_history<CR>                   Command History
--  <leader>sb           <Cmd>Telescope current_buffer_fuzzy_find<CR>         Buffer
--  <leader>sa           <Cmd>Telescope autocommands<CR>                      Auto Commands
--  <leader>s"           <Cmd>Telescope registers<CR>                         Registers
--  <leader>gs           <Cmd>Telescope git_status<CR>                        Status
--  <leader>gc           <Cmd>Telescope git_commits<CR>                       Commits
--  <leader>fr           <Cmd>Telescope oldfiles<CR>                          Recent
--  <leader>fg           <Cmd>Telescope git_files<CR>                         Find Files (git-files)
--  <leader>sq           <Cmd>Telescope quickfix<CR>                          Quickfix List
--  <leader>sW           No command                                           Word (cwd)
--  <leader>sG           No command                                           Grep (cwd)
--  <leader>fR           No command                                           Recent (cwd)
--  <leader>uC           No command                                           Colorscheme with Preview
--  <leader>sS           No command                                           Goto Symbol (Workspace)
--  <leader>fF           No command                                           Find Files (cwd)
--  <leader>ff           No command                                           Find Files (Root Dir)
--  <leader>fc           No command                                           Find Config File



-- GIT --
-- gB                    No command                                           Git Browse
-- gb                    No command                                           Git Blame Line
-- gG                    No command                                           Lazygit (cwd)
-- gg                    No command                                           Lazygit (Root Dir)
-- gL                    No command                                           Lazygit Log (cwd)
-- gl                    No command                                           Lazygit Log
-- gf                    No command                                           Lazygit Current File History
map('<leader>lg', '<cmd>LazyGit<cr>', 'LazyGit')

-- HELP --
-- &                     :&&<CR>                                              :help &-default
-- Y                     y$                                                   :help Y-default


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





-- TERMINAL --
-- fT                                     No command                                         Terminal (cwd)
-- ft                                     No command                                         Terminal (Root Dir)
-- <C-/>                                  No command                                         Terminal (Root Dir)
vim.keymap.set('t', '<Esc><Esc>', '<C-\\><C-n>', { desc = 'Exit terminal mode' })

-- TROUBLE --
-- [w                                     No command                                         Prev Warning
-- [e                                     No command                                         Prev Error
-- [q                                     No command                                         Previous Quickfix
-- [b                                     <Cmd>bprevious<CR>                                 Prev Buffer
-- ]w                                     No command                                         Next Warning
-- ]e                                     No command                                         Next Error
-- ]q                                     No command                                         Next Quickfix




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
map('<leader>q', vim.diagnostic.setloclist, 'Open diagnostic [Q]uickfix list')


-- MATCHIT --
-- <Plug>(MatchitNormalMultiForward)      :<C-U>call matchit#MultiMatch("W",  "n")<CR>       No description
-- <Plug>(MatchitNormalMultiBackward)     :<C-U>call matchit#MultiMatch("bW", "n")<CR>       No description
-- <Plug>(MatchitNormalBackward)          :<C-U>call matchit#Match_wrapper('',0,'n')<CR>     No description
-- <Plug>(MatchitNormalForward)           :<C-U>call matchit#Match_wrapper('',1,'n')<CR>     No description
-- g%                                     <Plug>(MatchitNormalBackward)                      No description
-- ]%                                     <Plug>(MatchitNormalMultiForward)                  No description
-- %                                      <Plug>(MatchitNormalForward)                       No description
-- [%                                     <Plug>(MatchitNormalMultiBackward)                 No description



local logKeys = require('config.helpers.logKeys')
logKeys('n', '/Users/ken/Documents/Software/DevBox/dotfiles/nvim/lua/debug.txt')
