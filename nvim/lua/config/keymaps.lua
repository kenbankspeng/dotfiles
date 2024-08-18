--
-- KEYMAP CONSTANTS
--
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

-- helpers
local whichkey = require("which-key")
local command = vim.api.nvim_create_user_command
local del = vim.keymap.del
local map = function(keys, func, desc)
  vim.keymap.set("n", keys, func, { desc = desc })
end


-- Document existing key chains
whichkey.add({
  { "<leader>b", group = "+buffer" },
  { "<leader>c", group = "+code" },
  { "<leader>d", group = "+lsp", icon = '' },
  { "<leader>f", group = "+find/+file" },
  { "<leader>g", group = "+git" },
  { "<leader>s", group = "+search" },
  { "<leader>u", group = "+toggle" },
  { "<leader>x", group = "+lists", icon = '' },
  { "<leader>y", group = "+yazi", icon = '󰇥' },
})



-- Remap Q to start/stop recording a macro (requires a register)
vim.keymap.set("n", "Q", "q", { noremap = true })

-- custom quit command because using bufferline
command("Q", function() vim.api.nvim_buf_delete(0, {}) end, {})

-- close split or buffer
local smart_close = require("config.helpers.window").smart_close
vim.keymap.set("n", "q", smart_close, { noremap = true, silent = true })

-- VIM KEYMAPS

-- Insertion and Appending
-- `a`: append after cursor
-- `A`: append at end of line
-- `i`: insert before cursor
-- `I`: insert at beginning of line
-- `o`: open a new line below
-- `O`: open a new line above

-- Deletion
-- `d`: delete (requires a motion)
-- `D`: delete to the end of the line
-- `x`: delete character
-- `X`: delete character before cursor

-- Change
-- `c`: change (requires a motion)
-- `C`: change to the end of the line
-- `s`: substitute character
-- `S`: substitute line

-- Movement
-- `h`: move left
-- `j`: move down
-- `k`: move up
-- `l`: move right
-- `w`: move forward by word
-- `W`: move forward by WORD
-- `b`: move backward by word
-- `B`: move backward by WORD
-- `e`: move to the end of a word
-- `E`: move to the end of a WORD
-- `f`: find character forward (requires a character)
-- `F`: find character backward (requires a character)
-- `t`: move until character forward (requires a character)
-- `T`: move until character backward (requires a character)
-- `g`: various commands (requires another key)
-- `G`: go to the last line of the file
-- `H`: move to the top of the screen
-- `L`: move to the bottom of the screen
-- `M`: move to the middle of the screen

-- Yanking and Pasting
-- `y`: yank (requires a motion)
-- `Y`: yank line
-- `p`: paste after cursor
-- `P`: paste before cursor

-- Searching and Repeating
-- `n`: repeat search forward
-- `N`: repeat search backward

-- Miscellaneous
-- 'q': delete current buffer (with bufferline, acts like a quit)
-- `u`: undo
-- `U`: redo
-- `r`: replace character (requires a character)
-- `R`: replace mode
-- `v`: visual mode
-- `V`: visual line mode
-- `Q`: record macro (requires a register)
-- `m`: mark (requires a character)
-- `z`: various commands (requires another key)
-- `J`: join lines
-- `K`: look up keyword under the cursor

--
-- CUSTOM KEYMAPS - automatically loaded on the VeryLazy event
--

--
-- DELETE unwanted LazyVim/Plugin mappings
--

-- LAZY --
del("n", "<leader>L")          -- LazyVim Changelog
del("n", "<leader>K")          -- man keyword lookup
del("n", "<C-Up>")             -- Resize window
del("n", "<C-Down>")           -- Resize window
del("n", "<C-Left>")           -- Resize window
del("n", "<C-Right>")          -- Resize window
del("n", "<leader>qq")         -- quit all

del("n", "<leader><Tab>[")     -- real vim tabs
del("n", "<leader><Tab>d")     -- real vim tabs
del("n", "<leader><Tab>]")     -- real vim tabs
del("n", "<leader><Tab><Tab>") -- real vim tabs
del("n", "<leader><Tab>f")     -- real vim tabs
del("n", "<leader><Tab>o")     -- real vim tabs
del("n", "<leader><Tab>l")     -- real vim tabs

del("n", "[b")                 -- Prev Buffer
del("n", "]b")                 -- Next Buffer
del("n", "<leader>bl")         -- Delete Buffers to the Left
del("n", "<leader>br")         -- Delete Buffers to the Right
del("n", "<leader>bo")         -- Delete Other Buffers
del("n", "<leader>bP")         -- Delete Non-Pinned Buffers
del("n", "<leader>bp")         -- Toggle Pin

del("n", "<M-k>")              -- Move Code Up
del("n", "<M-j>")              -- Move Code Down

del("n", "<leader>|")          -- Split Window Right <C-W>v                                             Split Window Right
del("n", "<leader>-")          -- Split Window Below <C-W>s                                             Split Window Below

-- NEOTREE -- cannot disable - so remove keys
del("n", "<leader>E")  -- Explorer NeoTree (cwd)
del("n", "<leader>e")  -- Explorer NeoTree (Root Dir)
del("n", "<leader>fE") -- Explorer NeoTree (cwd)
del("n", "<leader>fe") -- Explorer NeoTree (Root Dir)

--
-- Add/modify key mappings
-- nvim/lazy defaults shown in comments
--

-- OIL --
-- oil has a bug which prevents me from setting all the keymaps here
-- See :help oil-actions for a list of all available actions
local detail = false -- used in oil_helper
local actions = require("oil.actions")
local oil_helper = require("config.helpers.oil")
local toggle_detail = oil_helper.toggle_detail
local mux = oil_helper.mux
local go_right = oil_helper.go_right
local go_left = oil_helper.go_left
local maybe_go_right_maybe_cd = oil_helper.maybe_go_right_maybe_cd
map("<leader><leader>", "<cmd>Oil --float<CR>", "open parent directory") -- ok
map("gd", function()
  toggle_detail(detail)
end, "toggle Oil details") -- no leader
map("<left>", mux(go_left, actions.parent.callback), "parent")
map("<right>", mux(go_right, maybe_go_right_maybe_cd), "right")
--   g?             actions.show_help
--   g.             actions.toggle_hidden
-- <CR>             actions.select
-- <C-h>            actions.select  opts = { horizontal = true }   Open the entry in a horizontal split
-- <C-t>            actions.select  opts = { tab = true }          Open the entry in new tab
-- <C-p>            actions.preview
-- <C-c>            actions.close
-- <C-l>            actions.refresh
--   -              actions.parent
--   _              actions.open_cwd
--   `              actions.cd
--   ~              actions.cd opts = { scope = "tab" }            :tcd to the current oil directory
--   gs             actions.change_sort
--   gx             actions.open_external
--   g\\            actions.toggle_trash

-- BUFFERS (using bufferline, emulating tabs)
map("H", "<Cmd>BufferLineCyclePrev<CR>", "Prev Buffer")
map("L", "<Cmd>BufferLineCycleNext<CR>", "Next Buffer")
map("<S-Tab>", "<Cmd>BufferLineCyclePrev<CR>", "Prev Buffer")
map("<Tab>", "<Cmd>BufferLineCycleNext<CR>", "Next Buffer")

-- YAZI --
map("<leader>y.", "<cmd>Yazi<CR>", "Open yazi at the current file")      -- ok
map("<leader>yy", "<cmd>Yazi cwd<CR>", "Open yazi at working directory") -- ok

-- TELESCOPE -- ok -- See `:help telescope.builtin`
local builtin = require("telescope.builtin")
map("<leader>sh", builtin.help_tags, "search help")                         -- ok
map("<leader>sk", builtin.keymaps, "search keymaps")                        -- ok
map("<leader>sf", builtin.find_files, "search files")                       -- ok
map("<leader>ss", builtin.builtin, "search select telescope")               -- ok
map("<leader>sw", builtin.grep_string, "search current word")               -- ok
map("<leader>sg", builtin.live_grep, "search by grep")                      -- ok
map("<leader>sd", builtin.diagnostics, "search diagnostics")                -- ok
map("<leader>sr", builtin.resume, "search resume")                          -- ok
map("<leader>s.", builtin.oldfiles, 'search Recent Files ("." for repeat)') -- ok
map("<leader>fb", builtin.buffers, "find in buffers")                       -- ok

-- defined in lsp-config.lua as autocmd associated with file type
--
-- gd                   telescope lsp_definitions                -- definition
-- gr                   telescope lsp_references                 -- references
-- gI                   telescope lsp_implementations            -- implementation
-- <leader>D            telescope lsp_type_definitions           -- Type ddefinition
-- <leader>ds           telescope lsp_document_symbols           -- document symbols
-- <leader>ws           telescope lsp_dynamic_workspace_symbols  -- workspace symbols
-- <leader>dr           vim.lsp.buf.rename                       -- rename
-- <leader>ca           vim.lsp.buf.code_action                  -- code action
-- gD                   vim.lsp.buf.declaration                  -- declaration

-- You can pass additional configuration to Telescope to change the theme, layout, etc.
local tele = require("config.helpers.telescope")
map("<leader>/", tele.fzf_current_buffer, "fuzzy search current buffer")
map("<leader>s/", tele.live_grep, "search in open files")
map("<leader>sn", tele.find_files, "search neovim files")

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


-- HARPOON --
-- local harpoon = require("harpoon")
-- map("<leader>ha", function() harpoon:list():add() end, "harpoon add")
-- map("<leader>hl", function() harpoon.ui:toggle_quick_menu(harpoon:list()) end, "harpoon list")
-- map("<leader>h1", function() harpoon:list():select(1) end, "harpoon select1")
-- map("<leader>h2", function() harpoon:list():select(2) end, "harpoon select2")
-- map("<leader>h3", function() harpoon:list():select(3) end, "harpoon select")
-- map("<leader>h4", function() harpoon:list():select(4) end, "harpoon select")
-- map("<leader>hp", function() harpoon:list():prev() end, "harpoon prev")
-- map("<leader>hn", function() harpoon:list():next() end, "harpoon next")

-- CONFORM -- autoformat
-- <leader>cF                         No command                                 Format Injected Langs
-- <leader>cf    --ok                 No command                                 Format Code

-- GENERAL --

-- removed, but put under new keys
-- <M-k>                 <Cmd>m .-2<CR>==                         Move Code Up
-- <M-j>                 <Cmd>m .+1<CR>==                         Move Code Down

-- <Esc>                       <Cmd>noh<CR><Esc>                                  Escape and Clear hlsearch
-- <leader>fn -- ok            <Cmd>enew<CR>                                      New File
-- <C-S> -- ok                 <Cmd>w<CR><Esc>                                    Save File                                    Quit All
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

-- SEARCH -- ok
-- ?   -- ok
-- n   -- ok                                  'Nn'[v:searchforward].'zv'                         Next Search Result
-- N   -- ok                                  'nN'[v:searchforward].'zv'                         Prev Search Result


-- GRUG-FAR -- ** conflict with Telescope
map("<leader>fr", require("config.helpers.grug_far").find_replace, "Find and Replace")

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
-- <Up>                  v:count == 0 ? 'gk' : 'k'                Up
-- <Down>                v:count == 0 ? 'gj' : 'j'                Down
-- g]                    No command                               Move to right "around"
-- g[                    No command                               Move to left "around"

-- BUFFERS / WINDOWS --
-- bD                    <Cmd>:bd<CR>                                       Delete Buffer and Window
-- bd                    No command                                         Delete Buffer
-- `                     <Cmd>e #<CR>                                       Switch to Other Buffer
-- bb                    <Cmd>e #<CR>                                       Switch to Other Buffer
-- w                     <C-W>                                              Windows
-- <leader>|             <C-W>v                                             Split Window Right
-- <leader>-             <C-W>s                                             Split Window Below
-- wm                    No command                                         Toggle Maximize
-- wd                    <C-W>c                                             Delete Window
-- <C-L>                 <C-W>l                                             Go to Right Window
-- <C-K>                 <C-W>k                                             Go to Upper Window
-- <C-J>                 <C-W>j                                             Go to Lower Window
-- <C-H>                 <C-W>h                                             Go to Left Window

-- depending on situation, send command to neovim or to wezterm
local unified = require("config.helpers.nvim_wezterm")

-- splits
map("<leader>\\", "<C-w>v", "split right")
map("<leader>/", "<C-w>s", "split down")

-- navigate splits   -- ok
map("<S-Left>", function() unified.navigate("h") end, "navigate left")
map("<S-Down>", function() unified.navigate("j") end, "navigate down")
map("<S-Up>", function() unified.navigate("k") end, "navigate up")
map("<S-Right>", function() unified.navigate("l") end, "navigate right")
-- resize splits   -- ok
map("<M-Left>", function() unified.resize("h", 2) end, "resize left")
map("<M-Down>", function() unified.resize("j", 2) end, "resize down")
map("<M-Up>", function() unified.resize("k", 2) end, "resize up")
map("<M-Right>", function() unified.resize("l", 2) end, "resize right")

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
map("<leader>xf", vim.diagnostic.setloclist, "Open diagnostic [Q]uickfix list")

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
  require("config.helpers.keys").log("n", "/Users/ken/Documents/Software/DevBox/dotfiles/nvim/lua/debug.txt")
end

map("<leader>gz", logit, "logit")

-- OVERLAPPING KEYMAPS --
--------------------------------------------------------------

-- checking for overlapping keymaps ~
-- - WARNING In mode `n`, <<Space>w> overlaps with <<Space>wm>, <<C-W><C-D>>, <<Space>wd>:
--   - <<Space>w>: windows
--   - <<Space>wm>: Enable Maximize
--   - <<C-W><C-D>>: Show diagnostics under the cursor
--   - <<Space>wd>: Delete Window
-- - WARNING In mode `n`, <gc> overlaps with <gco>, <gcO>, <gcc>:
--   - <gc>: Toggle comment
--   - <gco>: Add Comment Below
--   - <gcO>: Add Comment Above
--   - <gcc>: Toggle comment line
-- - WARNING In mode `x`, <i> overlaps with <il>, <in>:
--   - <i>: inside
--   - <il>: last
--   - <in>: next
-- - WARNING In mode `x`, <a> overlaps with <a%>, <al>, <an>:
--   - <a>: around
--   - <al>: last
--   - <an>: next
-- - WARNING In mode `o`, <i> overlaps with <il>, <in>:
--   - <i>: inside
--   - <il>: last
--   - <in>: next
-- - WARNING In mode `o`, <a> overlaps with <al>, <an>:
--   - <a>: around
--   - <al>: last
--   - <an>: next
