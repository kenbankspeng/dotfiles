-- Keymaps are automatically loaded on the VeryLazy event
-- Default keymaps that are always set: https://github.com/LazyVim/LazyVim/blob/main/lua/lazyvim/config/keymaps.lua
-- Add any additional keymaps here
-- See `:help vim.keymap.set()`

local map = vim.keymap.set
local diagnostic = vim.diagnostic


-- Oil
map("n", "<leader><leader>", "<cmd>Oil --float<CR>", { desc = 'open parent directory' })

-- Yazi
map("n", "<leader>y1", "<cmd>Yazi<CR>", { desc = "Open yazi at the current file" })
map("n", "<leader>y2", "<cmd>Yazi cwd<CR>", { desc = "Open yazi at working directory" })
map("n", "<leader>y3", "<cmd>Yazi toggle<CR>", { desc = "Resume yazi session" })

-- better up/down
-- j = better down - v:count == 0 ? 'gj' : 'j'
-- <Down> = better down - v:count == 0 ? 'gj' : 'j'
-- k = better up - v:count == 0 ? 'gk' : 'k'
-- <Up> = better down - v:count == 0 ? 'gk' : 'k'



-- terminal
map('t', '<Esc><Esc>', '<C-\\><C-n>', { desc = 'Exit terminal mode' })



-------------------------------------------------------------------------
-- <A-j> -------------- Move Down ---------------------- GENERAL --------
-- <A-k> -------------- Move Up ------------------------ GENERAL --------
-- <C-/> -------------- Hide Terminal ------------------ GENERAL --------
-- <C-Down> ----------- Decrease Window Height --------- GENERAL --------
-- <C-h> -------------- Go to Left Window -------------- GENERAL --------
-- <C-j> -------------- Go to Lower Window ---------------------
-- <C-k> -------------- Go to Upper Window ---------------------
-- <C-l> -------------- Go to Right Window ---------------------
-- <C-Left> ----------- Decrease Window Width ------------------
-- <C-Right> ---------- Increase Window Width ------------------
-- <C-s> -------------- Save File ------------------------------
-- <C-Up> ------------- Increase Window Height -----------------
-- <c-/> -------------- Terminal (Root Dir) --------------------
-- <c-_> -------------- which_key_ignore -----------------------
-- <Down> ------------- Down -----------------------------------
-- <esc> -------------- Escape and Clear hlsearch --------------
-- <esc><esc> --------- Enter Normal Mode ----------------------
-- <leader>- ---------- Split Window Below ---------------------
-- <leader>` ---------- Switch to Other Buffer -----------------
-- <leader>| ---------- Split Window Right ---------------------
-- <leader><tab><tab> - New Tab --------------------------------
-- <leader><tab>d ----- Close Tab ------------------------------
-- <leader><tab>f ----- First Tab ------------------------------
-- <leader><tab>l ----- Last Tab -------------------------------
-- <leader><tab>o ----- Close Other Tabs -----------------------
-- <leader><tab>[ ----- Previous Tab ---------------------------
-- <leader><tab>] ----- Next Tab -------------------------------
-- <leader>bb --------- Switch to Other Buffer -----------------
-- <leader>bd --------- Delete Buffer --------------------------
-- <leader>bD --------- Delete Buffer and Window ---------------
-- <leader>cf --------- Format ---------------------------------
-- <leader>cd --------- Line Diagnostics -----------------------
-- <leader>fn --------- New File -------------------------------
-- <leader>fT --------- Terminal (cwd) -------------------------
-- <leader>ft --------- Terminal (Root Dir) --------------------
-- <leader>gB --------- Git Browse -----------------------------
-- <leader>gb --------- Git Blame Line -------------------------
-- <leader>gf --------- Lazygit Current File History -----------
-- <leader>gg --------- Lazygit (Root Dir) ---------------------
-- <leader>gG --------- Lazygit (cwd) --------------------------
-- <leader>gl --------- Lazygit Log ----------------------------
-- <leader>gL --------- Lazygit Log (cwd) ----------------------
-- <leader>K ---------- Keywordprg -----------------------------
-- <leader>L ---------- LazyVim Changelog ----------------------
-- <leader>l ---------- Lazy -----------------------------------
-- <leader>qq --------- Quit All -------------------------------
-- <leader>ui --------- Inspect Pos ----------------------------
-- <leader>uI --------- Inspect Tree ---------------------------
-- <leader>ub --------- Toggle Background ----------------------
-- <leader>uc --------- Toggle conceallevel --------------------
-- <leader>ud --------- Toggle Diagnostics ---------------------
-- <leader>uf --------- Toggle Auto Format (Global) ------------
-- <leader>uF --------- Toggle Auto Format (Buffer) ------------
-- <leader>uh --------- Toggle Inlay Hints ---------------------
-- <leader>ui --------- Inspect Pos ----------------------------
-- <leader>uI --------- Inspect Tree ---------------------------
-- <leader>ul --------- Toggle Line Numbers --------------------
-- <leader>uL --------- Toggle Relative Number -----------------
-- <leader>ur --------- Redraw / Diff Update -------------------
-- <leader>us --------- Toggle Spelling ------------------------
-- <leader>uT --------- Toggle Treesitter Highlight ------------
-- <leader>uw --------- Toggle Wrap ----------------------------
-- <leader>w ---------- Windows --------------------------------
-- <leader>wd --------- Delete Window --------------------------
-- <leader>wm --------- Toggle Maximize ------------------------
-- <S-h> -------------- Prev Buffer ----------------------------
-- <S-l> -------------- Next Buffer ----------------------------
-- <Up> --------------- Up -------------------------------------
-- gco ---------------- Add Comment Below ----------------------
-- gcO ---------------- Add Comment Above ----------------------
-- j ------------------ Down -----------------------------------
-- k ------------------ Up -------------------------------------
-- n ------------------ Next Search Result ---------------------
-- N ------------------ Prev Search Result ---------------------
-- [b ----------------- Prev Buffer ----------------------------
-- [d ----------------- Prev Diagnostic ------------------------
-- [e ----------------- Prev Error -----------------------------
-- [q ----------------- Previous Quickfix ----------------------
-- [w ----------------- Prev Warning ---------------------------
-- ]b ----------------- Next Buffer ----------------------------
-- ]d ----------------- Next Diagnostic ------------------------
-- ]e ----------------- Next Error -----------------------------
-- ]q ----------------- Next Quickfix --------------------------
-- ]w ----------------- Next Warning ---------------------------
----------------------------------------------------------------
