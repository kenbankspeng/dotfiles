-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
-- See `:help vim.keymap.set()`

-- local map = vim.keymap.set
-- local diagnostic = vim.diagnostic

-- local deleteKeys = require('config.helpers.deleteKeys')
-- deleteKeys('n')

local logKeys = require('config.helpers.logKeys')
logKeys('n', '/Users/ken/Documents/Software/DevBox/dotfiles/nvim/lua/debug.txt')


--     ● lazy.nvim 26.28ms  init.lua
--     ● LazyVim 5.81ms  start
--     ○ catppuccin



--     ○ gitsigns.nvim  LazyFile
--     ○ grug-far.nvim  <leader>sr  <leader>sr (v)  GrugFar
--     ○ indent-blankline.nvim  LazyFile
--     ○ lazydev.nvim  LazyDev  lua
--     ○ luvit-meta
--     ○ mason-lspconfig.nvim  nvim-lspconfig
--     ○ mason.nvim  <leader>cm  Mason  nvim-lspconfig  conform.nvim
--     ○ mini.icons
--     ○ neo-tree.nvim  <leader>E  <leader>ge  <leader>be  <leader>fe  <leader>fE  <leader>e  Neotree
--     ○ nvim-cmp  <Tab> (s)  <S-Tab> (s)  <S-Tab> (i)  <Tab> (i)  InsertEnter
--     ○ nvim-lint  LazyFile
--     ○ nvim-lspconfig  LazyFile
--     ○ nvim-snippets  nvim-cmp
--     ○ nvim-ts-autotag  LazyFile
--     ○ persistence.nvim  <leader>ql  <leader>qd  <leader>qs  BufReadPre
--     ○ plenary.nvim
--     ○ telescope-fzf-native.nvim  telescope.nvim
--     ○ todo-comments.nvim  <leader>sT  <leader>st  [t  <leader>xt  <leader>xT  ]t  LazyFile  TodoTelescope  TodoTrouble




------------------------------------------------------------------------------
-----------------                              -------------------------------
-----------------   SORTED LAZY DEFAULT KEYS   -------------------------------
-----------------                              -------------------------------
-----------------   Major keys: Ctrl, Leader,  -------------------------------
-----------------     [, ], g , z              -------------------------------
-----------------                              -------------------------------
-----------------   Direct keys used:          -------------------------------
-----------------    h, j, k, l, n, p, r, s, y ------------------------------
-----------------                              -------------------------------
-----------------   Leader keys avail:         -------------------------------
-----------------     e, i, m, n, t, v         -------------------------------
------------------------------------------------------------------------------
-- <A-j> -------------- Move Down --------------------------- GENERAL --------
-- <A-k> -------------- Move Up ----------------------------- GENERAL --------
-- <A-n> -------------- Next Reference ---------------------- LSP ------------
-- <A-p> -------------- Prev Reference ---------------------- LSP ------------
-- <C-/> -----**------- Hide Terminal ----------------------- GENERAL --------
-- <C-/> -----**------- Terminal (Root Dir) ----------------- GENERAL --------
-- <C-Down> ----------- Decrease Window Height -------------- GENERAL --------
-- <C-Left> ----------- Decrease Window Width --------------- GENERAL --------
-- <C-Right> ---------- Increase Window Width --------------- GENERAL --------
-- <C-Up> ------------- Increase Window Height -------------- GENERAL --------
do end -- <C-Space> -- CMP --
-- <C-_> -------------- which_key_ignore -------------------- GENERAL --------
-- <C-a> -------------- Increment --------------------------- DIAL -----------
-- <C-b> -------------- Scroll Backward --------------------- NOICE ----------
do end -- <C-b> -- CMP --
-- <C-f> -------------- Scroll Forward ---------------------- NOICE ----------
do end -- <C-f> -- CMP --
-- <C-h> -------------- Go to Left Window ------------------- GENERAL --------
do end -- <C-h> -- CMP --
-- <C-j> -------------- Go to Lower Window ------------------ GENERAL --------
-- <C-k> -----**------- Go to Upper Window ------------------ GENERAL --------
-- <C-k> -----**------- Signature Help ---------------------- LSP ------------
-- <C-l> -------------- Go to Right Window ------------------ GENERAL --------
do end -- <C-l> -- CMP --
do end -- <C-n> -- CMP --
do end -- <C-p> -- CMP --
-- <C-s> -----**------- Submit Prompt ----------------------- COPILOT CHAT ---
-- <C-s> -----**------- Toggle Flash Search ----------------- FLASH ----------
-- <C-s> -----**------- Save File --------------------------- GENERAL --------
-- <C-w><space> ------- Window Hydra Mode (which-key) ------- WHICH-KEY ------
-- <C-x> -------------- Decrement --------------------------- DIAL -----------
do end -- <C-y> -- CMP --
-- <Down> ------------- Down -------------------------------- GENERAL --------
-- <P ----------------- Put Before and Indent Left ---------- YANKY ----------
-- <S-Enter> ---------- Redirect Cmdline -------------------- NOICE ----------
-- <S-h> -----**------- Prev Buffer ------------------------- BUFFERLINE -----
-- <S-h> -----**------- Prev Buffer ------------------------- GENERAL --------
-- <S-l> -----**------- Next Buffer ------------------------- BUFFERLINE -----
-- <S-l> -----**------- Next Buffer ------------------------- GENERAL --------
-- <Up> --------------- Up ---------------------------------- GENERAL --------
-- <esc> -------------- Escape and Clear hlsearch ----------- GENERAL --------
do end --map('t', '<Esc><Esc>', '<C-\\><C-n>', { desc = 'Exit terminal mode' })                   -- TERMINAL --
-- <esc><esc> --------- Enter Normal Mode ------------------- GENERAL --------
do end -- map("n", "<leader><leader>", "<cmd>Oil --float<CR>", { desc = 'open parent directory' }) -- OIL --
-- <leader>, ---------- Switch Buffer ----------------------- TELESCOPE ------
-- <leader>- ---------- Split Window Below ------------------ GENERAL --------
-- <leader>/ ---------- Grep (Root Dir) --------------------- TELESCOPE ------
-- <leader>1 ---------- Harpoon to File 1 ------------------- HARPOON --------
-- <leader>2 ---------- Harpoon to File 2 ------------------- HARPOON --------
-- <leader>3 ---------- Harpoon to File 3 ------------------- HARPOON --------
-- <leader>4 ---------- Harpoon to File 4 ------------------- HARPOON --------
-- <leader>5 ---------- Harpoon to File 5 ------------------- HARPOON --------
-- <leader>: ---------- Command History --------------------- TELESCOPE ------
-- <leader><space> ---- Find Files (Root Dir) --------------- TELESCOPE ------
-- <leader><tab><tab> - New Tab ----------------------------- GENERAL --------
-- <leader><tab>[ ----- Previous Tab ------------------------ GENERAL --------
-- <leader><tab>] ----- Next Tab ---------------------------- GENERAL --------
-- <leader><tab>d ----- Close Tab --------------------------- GENERAL --------
-- <leader><tab>f ----- First Tab --------------------------- GENERAL --------
-- <leader><tab>l ----- Last Tab ---------------------------- GENERAL --------
-- <leader><tab>o ----- Close Other Tabs -------------------- GENERAL --------
do end -- map('<leader>D', require('telescope.builtin').lsp_type_definitions, 'Type [D]efinition') -- TELESCOPE/LSP --
-- <leader>? ---------- Buffer Keymaps (which-key) ---------- WHICH-KEY ------
-- <leader>H ---------- Harpoon File ------------------------ HARPOON --------
-- <leader>K ---------- Keywordprg -------------------------- GENERAL --------
-- <leader>L ---------- LazyVim Changelog ------------------- GENERAL --------
-- <leader>` ---------- Switch to Other Buffer -------------- GENERAL --------
-- <leader>a ---------- +ai --------------------------------- COPILOT CHAT ---
-- <leader>aa --------- Toggle (CopilotChat) ---------------- COPILOT CHAT ---
-- <leader>ad --------- Diagnostic Help (CopilotChat)-------- COPILOT CHAT ---
-- <leader>ap --------- Prompt Actions (CopilotChat) -------- COPILOT CHAT ---
-- <leader>aq --------- Quick Chat (CopilotChat) ------------ COPILOT CHAT ---
-- <leader>ax --------- Clear (CopilotChat) ----------------- COPILOT CHAT ---
-- <leader>bD --------- Delete Buffer and Window ------------ GENERAL --------
-- <leader>bP --------- Delete Non-Pinned Buffers ----------- BUFFERLINE -----
-- <leader>bb --------- Switch to Other Buffer -------------- GENERAL --------
-- <leader>bd --------- Delete Buffer ----------------------- GENERAL --------
-- <leader>bl --------- Delete Buffers to the Left ---------- BUFFERLINE -----
-- <leader>bo --------- Delete Other Buffers ---------------- BUFFERLINE -----
-- <leader>bp --------- Toggle Pin -------------------------- BUFFERLINE -----
-- <leader>br --------- Delete Buffers to the Right---------- BUFFERLINE -----
do end -- <leader>c -- WHICH-KEY --
-- <leader>cA --------- Source Action ----------------------- LSP ------------
-- <leader>cC --------- Refresh & Display Codelens ---------- LSP ------------
-- <leader>cF --------- Format Injected Langs --------------- CONFORM --------
-- <leader>cR --------- Rename File ------------------------- LSP ------------
-- <leader>cS --------- LSP references/definitions/... ------ TROUBLE --------
do end -- map('<leader>ca', vim.lsp.buf.code_action, '[C]ode [A]ction') -- LSP --
-- <leader>ca --------- Code Action ------------------------- LSP ------------
-- <leader>cc --------- Run Codelens ------------------------ LSP ------------
-- <leader>cd --------- Line Diagnostics -------------------- GENERAL --------
-- <leader>cf --------- Format ------------------------------ GENERAL --------
-- <leader>cl --------- Lsp Info ---------------------------- LSP ------------
do end -- <leader>cl -- Trouble --
-- <leader>cm	--------- Mason ------------------------------- MASON ----------
-- <leader>cn	--------- Generate Annotations ---------------- NEOGEN ---------
-- <leader>cr --------- Rename ------------------------------ LSP ------------
do end -- <leader>cs -- Trouble --
-- <leader>cs --------- Symbols (Trouble) ------------------- TROUBLE --------
do end -- <leader>d -- WHICH-KEY --
-- <leader>d ---------- +debug ------------------------------ DAP ------------
-- <leader>dB --------- Breakpoint Condition ---------------- DAP ------------
-- <leader>dC --------- Run to Cursor ----------------------- DAP ------------
-- <leader>dO --------- Step Over --------------------------- DAP ------------
-- <leader>da --------- Run with Args ----------------------- DAP ------------
-- <leader>db --------- Toggle Breakpoint ------------------- DAP ------------
-- <leader>dc --------- Continue ---------------------------- DAP ------------
-- <leader>de --------- Eval -------------------------------- AERIAL ---------
-- <leader>dg --------- Go to Line (No Execute) ------------- DAP ------------
-- <leader>di --------- Step Into --------------------------- DAP ------------
-- <leader>dj --------- Down -------------------------------- DAP ------------
-- <leader>dk --------- Up ---------------------------------- DAP ------------
-- <leader>dl --------- Run Last ---------------------------- DAP ------------
-- <leader>do --------- Step Out ---------------------------- DAP ------------
-- <leader>dp --------- Pause ------------------------------- DAP ------------
-- <leader>dr --------- Toggle REPL ------------------------- DAP ------------
do end -- map('<leader>ds', require('telescope.builtin').lsp_document_symbols, '[D]ocument [S]ymbols') -- TELESCOPE/LSP --
-- <leader>ds ---**---- Session ----------------------------- DAP ------------
-- <leader>dt --------- Terminate --------------------------- DAP ------------
-- <leader>du --------- Dap UI ------------------------------ AERIAL ---------
-- <leader>dw --------- Widgets ----------------------------- DAP ------------
-- <leader>fF --------- Find Files (cwd) -------------------- TELESCOPE ------
-- <leader>fR --------- Recent (cwd) ------------------------ TELESCOPE ------
-- <leader>fT --------- Terminal (cwd) ---------------------- GENERAL --------
-- <leader>fb --------- Buffers ----------------------------- TELESCOPE ------
-- <leader>fc --------- Find Config File -------------------- TELESCOPE ------
-- <leader>ff --------- Find Files (Root Dir) --------------- TELESCOPE ------
-- <leader>fg --------- Find Files (git-files) -------------- TELESCOPE ------
-- <leader>fn --------- New File ---------------------------- GENERAL --------
-- <leader>fr --------- Recent ------------------------------ TELESCOPE ------
-- <leader>ft --------- Terminal (Root Dir) ----------------- GENERAL --------
-- <leader>gB --------- Git Browse -------------------------- GENERAL --------
-- <leader>gG --------- Lazygit (cwd) ----------------------- GENERAL --------
-- <leader>gL --------- Lazygit Log (cwd) ------------------- GENERAL --------
-- <leader>gb --------- Git Blame Line ---------------------- GENERAL --------
-- <leader>gc --------- Commits ----------------------------- TELESCOPE ------
-- <leader>gf --------- Lazygit Current File History -------- GENERAL --------
-- <leader>gg --------- Lazygit (Root Dir) ------------------ GENERAL --------
-- <leader>gl --------- Lazygit Log ------------------------- GENERAL --------
-- <leader>gs --------- Status ------------------------------ TELESCOPE ------
-- <leader>h ---------- Harpoon Quick Menu ------------------ HARPOON --------
do end -- <leader>h -- WHICH-KEY --
-- <leader>l ---------- Lazy -------------------------------- GENERAL --------
-- <leader>ob --------- Task builder ------------------------ OVERSEER -------
-- <leader>oc --------- Clear cache ------------------------- OVERSEER -------
-- <leader>oi --------- Overseer Info ----------------------- OVERSEER -------
-- <leader>oo --------- Run task ---------------------------- OVERSEER -------
-- <leader>oq --------- Action recent task ------------------ OVERSEER -------
-- <leader>ot --------- Task action ------------------------- OVERSEER -------
-- <leader>ow --------- Task list --------------------------- OVERSEER -------
-- <leader>p ---------- Open Yank History ------------------- YANKY ----------
-- <leader>qd --------- Don't Save Current Session ---------- PERSISTANCE ----
-- <leader>ql --------- Restore Last Session ---------------- PERSISTANCE ----
-- <leader>qq --------- Quit All ---------------------------- GENERAL --------
-- <leader>qs --------- Restore Session --------------------- PERSISTANCE ----
-- <leader>r ---------- +refactor --------------------------- REFACTORING ----
do end -- <leader>r -- WHICH-KEY --
-- <leader>rF --------- Extract Function To File ------------ REFACTORING ----
-- <leader>rP --------- Debug Print ------------------------- REFACTORING ----
-- <leader>rb --------- Extract Block ----------------------- REFACTORING ----
-- <leader>rc --------- Debug Cleanup ----------------------- REFACTORING ----
-- <leader>rf ----**--- Extract Block To File --------------- REFACTORING ----
-- <leader>rf ----**--- Extract Function -------------------- REFACTORING ----
-- <leader>ri --------- Inline Variable --------------------- REFACTORING ----
do end -- map('<leader>rn', vim.lsp.buf.rename, '[R]e[n]ame') -- LSP --
-- <leader>rp --------- Debug Print Variable ---------------- REFACTORING ----
-- <leader>rs --------- Refactor ---------------------------- REFACTORING ----
-- <leader>rx --------- Extract Variable -------------------- REFACTORING ----
do end -- <leader>s. -- TELESCOPE --
-- <leader>s" --------- Registers --------------------------- TELESCOPE ------
do end -- <leader>s -- WHICH-KEY --
-- <leader>sC --------- Commands ---------------------------- TELESCOPE ------
-- <leader>sD --------- Workspace Diagnostics --------------- TELESCOPE ------
-- <leader>sG --------- Grep (cwd) -------------------------- TELESCOPE ------
-- <leader>sH --------- Search Highlight Groups ------------- TELESCOPE ------
-- <leader>sM --------- Man Pages --------------------------- TELESCOPE ------
-- <leader>sR --------- Resume ------------------------------ TELESCOPE ------
-- <leader>sS --------- Goto Symbol (Workspace) ------------- TELESCOPE ------
-- <leader>sT --------- Todo/Fix/Fixme ---------------------- TODO COMMENTS --
-- <leader>sW ---**---- Selection (cwd) --------------------- TELESCOPE ------
-- <leader>sW ---**---- Word (cwd) -------------------------- TELESCOPE ------
-- <leader>sa --------- Auto Commands ----------------------- TELESCOPE ------
-- <leader>sb --------- Buffer ------------------------------ TELESCOPE ------
-- <leader>sc --------- Command History --------------------- TELESCOPE ------
do end -- <leader>sd -- TELESCOPE --
-- <leader>sd --------- Document Diagnostics ---------------- TELESCOPE ------
do end -- <leader>sf -- TELESCOPE --
do end -- <leader>fb -- TELESCOPE --
do end -- <leader>sg -- TELESCOPE --
-- <leader>sg --------- Grep (Root Dir) --------------------- TELESCOPE ------
do end -- <leader>sh -- TELESCOPE --
-- <leader>sh --------- Help Pages -------------------------- TELESCOPE ------
-- <leader>sj --------- Jumplist ---------------------------- TELESCOPE ------
do end -- <leader>sk -- TELESCOPE --
-- <leader>sk --------- Key Maps ---------------------------- TELESCOPE ------
-- <leader>sl --------- Location List ----------------------- TELESCOPE ------
-- <leader>sm --------- Jump to Mark ------------------------ TELESCOPE ------
-- <leader>sn --------- +noice ------------------------------ NOICE ----------
-- <leader>sna -------- Noice All --------------------------- NOICE ----------
-- <leader>snd -------- Dismiss All ------------------------- NOICE ----------
-- <leader>snh -------- Noice History ----------------------- NOICE ----------
-- <leader>snl -------- Noice Last Message ------------------ NOICE ----------
-- <leader>snt -------- Noice Picker (Telescope/FzfLua) ----- NOICE ----------
-- <leader>so --------- Options ----------------------------- TELESCOPE ------
-- <leader>sq --------- Quickfix List ----------------------- TELESCOPE ------
do end -- <leader>sr -- TELESCOPE --
-- <leader>sr	--------- Search and Replace ------------------ GRUG FAR -------
-- <leader>ss ---**---- Goto Symbol ------------------------- AERIAL ---------
-- <leader>ss ---**---- Goto Symbol ------------------------- TELESCOPE ------
do end -- <leader>ss -- TELESCOPE --
-- <leader>st --------- Todo -------------------------------- TODO COMMENTS --
-- <leader>sw ---**---- Selection (Root Dir) ---------------- TELESCOPE ------
do end -- <leader>sw -- TELESCOPE --
-- <leader>sw ---**---- Word (Root Dir) --------------------- TELESCOPE ------
do end -- <leader>t -- WHICH-KEY --
-- <leader>uC --------- Colorscheme with Preview ------------ TELESCOPE ------
-- <leader>uF --------- Toggle Auto Format (Buffer) --------- GENERAL --------
-- <leader>uI --------- Inspect Tree ------------------------ GENERAL --------
-- <leader>uI --------- Inspect Tree ------------------------ GENERAL --------
-- <leader>uL --------- Toggle Relative Number -------------- GENERAL --------
-- <leader>uT --------- Toggle Treesitter Highlight --------- GENERAL --------
-- <leader>ub --------- Toggle Background ------------------- GENERAL --------
-- <leader>uc --------- Toggle conceallevel ----------------- GENERAL --------
-- <leader>ud --------- Toggle Diagnostics ------------------ GENERAL --------
-- <leader>uf --------- Toggle Auto Format (Global) --------- GENERAL --------
-- <leader>uh --------- Toggle Inlay Hints ------------------ GENERAL --------
-- <leader>ui --------- Inspect Pos ------------------------- GENERAL --------
-- <leader>ul --------- Toggle Line Numbers ----------------- GENERAL --------
-- <leader>un	--------- Dismiss All Notifications ----------- NOTIFY ---------
-- <leader>ur --------- Redraw / Diff Update ---------------- GENERAL --------
-- <leader>us --------- Toggle Spelling --------------------- GENERAL --------
-- <leader>uw --------- Toggle Wrap ------------------------- GENERAL --------
do end -- <leader>w -- WHICH-KEY --
-- <leader>w ---------- Windows ----------------------------- GENERAL --------
-- <leader>wd --------- Delete Window ----------------------- GENERAL --------
-- <leader>wm --------- Toggle Maximize --------------------- GENERAL --------
do end --  map('<leader>ws', require('telescope.builtin').lsp_dynamic_workspace_symbols, '[W]orkspace [S]ymbols') -- TELESCOPE/LSP --
do end -- <leader>xL -- Trouble --
-- <leader>xL --------- Location List (Trouble) ------------- TROUBLE --------
-- <leader>xQ --------- Quickfix List (Trouble) ------------- TROUBLE --------
do end -- <leader>xQ -- Trouble --
-- <leader>xT --------- Todo/Fix/Fixme (Trouble) ------------ TODO COMMENTS --
-- <leader>xX --------- Buffer Diagnostics (Trouble) -------- TROUBLE --------
do end -- <leader>xX -- Trouble --
-- <leader>xt --------- Todo (Trouble) ---------------------- TODO COMMENTS --
do end -- <leader>xx -- Trouble --
-- <leader>xx --------- Diagnostics (Trouble) --------------- TROUBLE --------
do end --map("n", "<leader>y.", "<cmd>Yazi<CR>", { desc = "Open yazi at the current file" })      -- YAZI --
do end -- map("n", "<leader>yy", "<cmd>Yazi cwd<CR>", { desc = "Open yazi at working directory" }) -- YAZI --
-- <leader>| ---------- Split Window Right ------------------ GENERAL --------
-- <localLeader>l	----- +vimtext ---------------------------- VIMTEX ---------
-- <p ----------------- Put and Indent Left ----------------- YANKY ----------
-- =P ----------------- Put Before Applying a Filter -------- YANKY ----------
-- =p ----------------- Put After Applying a Filter --------- YANKY ----------
-- >P ----------------- Put Before and Indent Right --------- YANKY ----------
-- >p ----------------- Put and Indent Right ---------------- YANKY ----------
-- K ------------------ Hover ------------------------------- LSP ------------
-- N ------------------ Prev Search Result ------------------ GENERAL --------
-- P ------------------ Put Text Before Cursor -------------- YANKY ----------
-- R ------------------ Treesitter Search ------------------- FLASH ----------
-- S --------**-------- Flash Treesitter -------------------- FLASH ----------
-- S --------**-------- Leap Backward to -------------------- LEAP -----------
-- [B ----------------- Move buffer prev -------------------- BUFFERLINE -----
-- [P ----------------- Put Indented Before Cursor ---------- YANKY ----------
-- [[ -------**-------- Prev Reference ---------------------- ILLUMINATE -----
-- [[ -------**-------- Prev Reference ---------------------- LSP ------------
-- [b -------**-------- Prev Buffer ------------------------- BUFFERLINE -----
-- [b -------**-------- Prev Buffer ------------------------- GENERAL --------
-- [d ----------------- Prev Diagnostic --------------------- GENERAL --------
-- [e ----------------- Prev Error -------------------------- GENERAL --------
-- [p ----------------- Put Indented Before Cursor ---------- YANKY ----------
-- [q -------**-------- Previous Quickfix ------------------- GENERAL --------
-- [q -------**-------- Previous Trouble/Quickfix Item ------ TROUBLE --------
-- [t ----------------- Previous Todo Comment --------------- TODO COMMENTS --
-- [w ----------------- Prev Warning ------------------------ GENERAL --------
-- [y ----------------- Cycle Forward Through Yank History -- YANKY ----------
-- ]B ----------------- Move buffer next -------------------- BUFFERLINE -----
-- ]P ----------------- Put Indented After Cursor ----------- YANKY ----------
-- ]] -------**-------- Next Reference ---------------------- ILLUMINATE -----
-- ]] -------**-------- Next Reference ---------------------- LSP ------------
-- ]b -------**-------- Next Buffer ------------------------- BUFFERLINE -----
-- ]b -------**-------- Next Buffer ------------------------- GENERAL --------
-- ]d ----------------- Next Diagnostic --------------------- GENERAL --------
-- ]e ----------------- Next Error -------------------------- GENERAL --------
-- ]p ----------------- Put Indented After Cursor ----------- YANKY ----------
-- ]q -------**-------- Next Quickfix ----------------------- GENERAL --------
-- ]q -------**-------- Next Trouble/Quickfix Item ---------- TROUBLE --------
-- ]t ----------------- Next Todo Comment ------------------- TODO COMMENTS --
-- ]w ----------------- Next Warning ------------------------ GENERAL --------
-- ]y ----------------- Cycle Backward Through Yank History - YANKY ----------
-- g<C-a> ------------- Increment --------------------------- DIAL -----------
-- g<C-x> ------------- Decrement --------------------------- DIAL -----------
-- gD ----------------- Goto Declaration -------------------- LSP ------------
do end -- map('gI', require('telescope.builtin').lsp_implementations, '[G]oto [I]mplementation') -- TELESCOPE/LSP --
-- gI ----------------- Goto Implementation ----------------- LSP ------------
-- gK ----------------- Signature Help ---------------------- LSP ------------
-- gP ----------------- Put Text Before Selection ----------- YANKY ----------
-- gcO ---------------- Add Comment Above ------------------- GENERAL --------
-- gco ---------------- Add Comment Below ------------------- GENERAL --------
do end -- map('gd', require('telescope.builtin').lsp_definitions, '[G]oto [D]efinition') -- TELESCOPE/LSP --
-- gd ----------------- Goto Definition --------------------- LSP ------------
do end -- map('gD', vim.lsp.buf.declaration, '[G]oto [D]eclaration') -- LSP --
-- gp ----------------- Put Text After Selection ------------ YANKY ----------
-- gr ----------------- References -------------------------- LSP ------------
do end -- map('gr', require('telescope.builtin').lsp_references, '[G]oto [R]eferences') -- TELESCOPE/LSP --
-- gs ----------------- Leap from Windows ------------------- LEAP -----------
-- gsF ---------------- Find Left Surrounding --------------- SURROUND -------
-- gsa ---------------- Add Surrounding --------------------- SURROUND -------
-- gsd ---------------- Delete Surrounding ------------------ SURROUND -------
-- gsf ---------------- Find Right Surrounding -------------- SURROUND -------
-- gsh ---------------- Highlight Surrounding --------------- SURROUND -------
-- gsn ---------------- Update MiniSurround.config.n_lines -- SURROUND -------
-- gsr ---------------- Replace Surrounding ----------------- SURROUND -------
-- gy ----------------- Goto T[y]pe Definition -------------- LSP ------------
-- j ------------------ Down -------------------------------- GENERAL --------
-- k ------------------ Up ---------------------------------- GENERAL --------
-- n ------------------ Next Search Result ------------------ GENERAL --------
-- p ------------------ Put Text After Cursor --------------- YANKY ----------
-- r ------------------ Remote Flash ------------------------ FLASH ----------
-- s -------**--------- Flash ------------------------------- FLASH ----------
-- s -------**--------- Leap Forward to --------------------- LEAP -----------
-- y ------------------ Yank Text --------------------------- YANKY ----------
