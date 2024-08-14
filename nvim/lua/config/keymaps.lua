-- <Nul> CTRL-@, <BS>	backspace	CTRL-H, <Tab> tab CTRL-I,
-- <NL> linefeed CTRL-J, <CR> carriage return CTRL-M,
-- <Esc> escape, <Space> space, <lt> less-than
-- <Bslash>	backslash, <Bar> vertical bar |, <Del> delete
-- <EOL> end-of-line (can be <CR>, <NL> or <CR><NL>,
-- <NOP> no-op: do nothing (useful in mappings)
-- <Up> cursor-up, <Down> cursor-down, <Left> cursor-left, <Right> cursor-right
-- <F1> - <F12>	function keys 1 to 12
-- <S-F1> - <S-F12> shift-function keys 1 to 12	<S-F1>
-- <Home> home (fn-left), <End> end (fn-right), <PageUp> fn-up, <PageDown> fn-down
-- <S-…> shift-key, <C-…> control-key		
-- <A-…> or <M-…> alt-key or meta-key, <D-…> command-key or "super" key


--
-- Delete unwanted LazyVim mappings
--

-- LAZY --
vim.keymap.del('n', '<leader>L') -- LazyVim Changelog
vim.keymap.del('n', '<leader>K') -- man keyword lookup
vim.keymap.del('n', "<C-Up>")    -- Resize window
vim.keymap.del('n', "<C-Down>")  -- Resize window
vim.keymap.del('n', "<C-Left>")  -- Resize window
vim.keymap.del('n', "<C-Right>") -- Resize window


-- NEOTREE -- cannot disable - so remove keys
vim.keymap.del('n', '<leader>E')  -- Explorer NeoTree (cwd)
vim.keymap.del('n', '<leader>e')  -- Explorer NeoTree (Root Dir)
vim.keymap.del('n', '<leader>fE') -- Explorer NeoTree (cwd)
vim.keymap.del('n', '<leader>fe') -- Explorer NeoTree (Root Dir)


--
-- Keymaps are automatically loaded on the VeryLazy event
--

local map = function(keys, func, desc)
  vim.keymap.set("n", keys, func, { desc = desc })
end

-- NVIM/LAZY DEFAULTS -- shown in comments






-- OIL --
map("<leader><leader>", "<cmd>Oil<CR>", "open parent directory") -- ok

-- YAZI --
map("<leader>y.", "<cmd>Yazi<CR>", "Open yazi at the current file")      -- ok
map("<leader>yy", "<cmd>Yazi cwd<CR>", "Open yazi at working directory") -- ok

-- CONFORM -- autoformat
-- <leader>cF                         No command                                 Format Injected Langs
-- <leader>cf    --ok                 No command                                 Format Code

-- GENERAL --
-- <Esc>                       <Cmd>noh<CR><Esc>                                  Escape and Clear hlsearch
-- <leader>fn -- ok            <Cmd>enew<CR>                                      New File
-- <C-S> -- ok                 <Cmd>w<CR><Esc>                                    Save File
-- <leader>qq -- ok            <Cmd>qa<CR>                                        Quit All
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

-- TABS/BUFFERS -- half ok
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


local harpoon = require("harpoon")
map("<leader>ha", function() harpoon:list():add() end, "harpoon add")
map("<leader>hl", function() harpoon.ui:toggle_quick_menu(harpoon:list()) end, "harpoon list")
map("<leader>h1", function() harpoon:list():select(1) end, "harpoon select1")
map("<leader>h2", function() harpoon:list():select(2) end, "harpoon select2")
map("<leader>h3", function() harpoon:list():select(3) end, "harpoon select")
map("<leader>h4", function() harpoon:list():select(4) end, "harpoon select")
map("<leader>hp", function() harpoon:list():prev() end, "harpoon prev")
map("<leader>hn", function() harpoon:list():next() end, "harpoon next")


-- SEARCH -- ok
-- ?   -- ok
-- n   -- ok                                  'Nn'[v:searchforward].'zv'                         Next Search Result
-- N   -- ok                                  'nN'[v:searchforward].'zv'                         Prev Search Result

-- TELESCOPE -- ok -- See `:help telescope.builtin`
local builtin = require("telescope.builtin")
map("<leader>sh", builtin.help_tags, "search [H]elp")                       -- ok
map("<leader>sk", builtin.keymaps, "search [K]eymaps")                      -- ok
map("<leader>sf", builtin.find_files, "search [F]iles")                     -- ok
map("<leader>ss", builtin.builtin, "search [S]elect Telescope")             -- ok
map("<leader>sw", builtin.grep_string, "search current [W]ord")             -- ok
map("<leader>sg", builtin.live_grep, "search by [G]rep")                    -- ok
map("<leader>sd", builtin.diagnostics, "search [D]iagnostics")              -- ok
map("<leader>sr", builtin.resume, "search [R]esume")                        -- ok
map("<leader>s.", builtin.oldfiles, 'search Recent Files ("." for repeat)') -- ok
map("<leader>fb", builtin.buffers, "[F]ind existing [B]uffers")             -- ok

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

map("<leader>/", function()
  -- You can pass additional configuration to Telescope to change the theme, layout, etc.
  builtin.current_buffer_fuzzy_find(require("telescope.themes").get_dropdown({
    winblend = 10,
    previewer = false,
  }))
end, "[/] Fuzzily search in current buffer")

map("<leader>s/", function()
  builtin.live_grep({
    grep_open_files = true,
    prompt_title = "Live Grep in Open Files",
  })
end, "[S]earch [/] in Open Files")

map("<leader>sn", function()
  builtin.find_files({ cwd = vim.fn.stdpath("config") })
end, "[S]earch [N]eovim files")

--  :                    <Cmd>Telescope command_history<CR>       Command History
--  ,                    <Cmd>Telescope buffers sort...<CR>       Switch Buffer
--  <leader>sR           <Cmd>Telescope resume<CR>                Resume
--  <leader>so           <Cmd>Telescope vim_options<CR>           Options
--  <leader>sm           <Cmd>Telescope marks<CR>                 Jump to Mark
--  <leader>sM           <Cmd>Telescope man_pages<CR>             Man Pages
--  <leader>sl           <Cmd>Telescope loclist<CR>               Location List
--  <leader>sj           <Cmd>Telescope jumplist<CR>              Jumplist
--  <leader>sH           <Cmd>Telescope highlights<CR>            Search Highlight Groups
--  <leader>sD           <Cmd>Telescope diagnostics<CR>           Workspace Diagnostics
--  <leader>sC           <Cmd>Telescope commands<CR>              Commands
--  <leader>sc           <Cmd>Telescope command_history<CR>       Command History
--  <leader>sb           <Cmd>Telescope current_buffer_ff<CR>     Buffer
--  <leader>sa           <Cmd>Telescope autocommands<CR>          Auto Commands
--  <leader>s"           <Cmd>Telescope registers<CR>             Registers
--  <leader>gs           <Cmd>Telescope git_status<CR>            Status
--  <leader>gc           <Cmd>Telescope git_commits<CR>           Commits
--  <leader>fr    **     <Cmd>Telescope oldfiles<CR>              Recent
--  <leader>fg           <Cmd>Telescope git_files<CR>             Find Files (git-files)
--  <leader>sq           <Cmd>Telescope quickfix<CR>              Quickfix List
--  <leader>sW           No command                               Word (cwd)
--  <leader>sG           No command                               Grep (cwd)
--  <leader>fR           No command                               Recent (cwd)
--  <leader>uC           No command                               Colorscheme with Preview
--  <leader>sS           No command                               Goto Symbol (Workspace)
--  <leader>fF           No command                               Find Files (cwd)
--  <leader>ff           No command                               Find Files (Root Dir)
--  <leader>fc           No command                               Find Config File

-- GRUG-FAR -- ** conflict with Telescope
map("<leader>fr", require("config.helpers.find_replace"), "Find and Replace")

-- GIT -- ok
-- gB                    No command                               Git Browse
-- gb                    No command                               Git Blame Line
-- gG                    No command                               Lazygit (cwd)
-- gg                    No command                               Lazygit (Root Dir)
-- gL                    No command                               Lazygit Log (cwd)
-- gl                    No command                               Lazygit Log
-- gf                    No command                               Lazygit Current File History

-- FLASH -- ok
-- S                     No command                               Flash Treesitter
-- s                     No command                               Flash

-- HELP --
-- &                     :&&<CR>                                  :help &-default
-- Y                     y$                                       :help Y-default

-- NAVIGATION --
-- j                     v:count == 0 ? 'gj' : 'j'                Down
-- k                     v:count == 0 ? 'gk' : 'k'                Up
-- <M-k>                 <Cmd>m .-2<CR>==                         Move Up
-- <M-j>                 <Cmd>m .+1<CR>==                         Move Down
-- <Up>                  v:count == 0 ? 'gk' : 'k'                Up
-- <Down>                v:count == 0 ? 'gj' : 'j'                Down
-- g]                    No command                               Move to right "around"
-- g[                    No command                               Move to left "around"

-- WINDOWS --
-- bD                    <Cmd>:bd<CR>                                       Delete Buffer and Window
-- bd                    No command                                         Delete Buffer
-- `                     <Cmd>e #<CR>                                       Switch to Other Buffer
-- bb                    <Cmd>e #<CR>                                       Switch to Other Buffer
-- w                     <C-W>                                              Windows
-- |                     <C-W>v                                             Split Window Right
-- -                     <C-W>s                                             Split Window Below
-- wm                    No command                                         Toggle Maximize
-- wd                    <C-W>c                                             Delete Window
-- <C-L>                 <C-W>l                                             Go to Right Window
-- <C-K>                 <C-W>k                                             Go to Upper Window
-- <C-J>                 <C-W>j                                             Go to Lower Window
-- <C-H>                 <C-W>h                                             Go to Left Window
map("<S-Up>", "<cmd>resize +2<cr>", "Increase Window Height")
map("<S-Down>", "<cmd>resize -2<cr>", "Decrease Window Height")
map("<S-Left>", "<cmd>vertical resize -2<cr>", "Decrease Window Width")
map("<S-Right>", "<cmd>vertical resize +2<cr>", "Increase Window Width")

-- TERMINAL --
-- fT                                     No command                                         Terminal (cwd)
-- ft                                     No command                                         Terminal (Root Dir)
-- <C-/>                                  No command                                         Terminal (Root Dir)
vim.keymap.set("t", "<Esc><Esc>", "<C-\\><C-n>", { desc = "Exit terminal mode" })

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
map("<leader>q", vim.diagnostic.setloclist, "Open diagnostic [Q]uickfix list")

-- MATCHIT --
-- <Plug>(MatchitNormalMultiForward)      :<C-U>call matchit#MultiMatch("W",  "n")<CR>       No description
-- <Plug>(MatchitNormalMultiBackward)     :<C-U>call matchit#MultiMatch("bW", "n")<CR>       No description
-- <Plug>(MatchitNormalBackward)          :<C-U>call matchit#Match_wrapper('',0,'n')<CR>     No description
-- <Plug>(MatchitNormalForward)           :<C-U>call matchit#Match_wrapper('',1,'n')<CR>     No description
-- g%                                     <Plug>(MatchitNormalBackward)                      No description
-- ]%                                     <Plug>(MatchitNormalMultiForward)                  No description
-- %                                      <Plug>(MatchitNormalForward)                       No description
-- [%                                     <Plug>(MatchitNormalMultiBackward)                 No description


--
-- Log the keys
--

local function logit()
  print("logit!")
  require("config.helpers.logKeys")("n", "/Users/ken/Documents/Software/DevBox/dotfiles/nvim/lua/debug.txt")
end

map("<leader>gz", logit, "logit")
