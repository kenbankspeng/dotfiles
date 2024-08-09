-- Basic Autocommands
--  See `:help lua-guide-autocommands`

local v = vim
local api = v.api
local schedule = v.schedule
local ui_entered = v.g.ui_entered
local exec_autocmds = api.nvim_exec_autocmds
local del_augroup_by_name = api.nvim_del_augroup_by_name
local buf_get_name = api.nvim_buf_get_name
local get_option_value = api.nvim_get_option_value
local autocmd = api.nvim_create_autocmd
local augroup = api.nvim_create_augroup

-- Highlight when yanking text - try yap
--  See `:help vim.highlight.on_yank()`
autocmd('TextYankPost', {
  desc = 'Highlight when yanking (copying) text',
  group = augroup('kickstart-highlight-yank', { clear = true }),
  callback = function()
    v.highlight.on_yank()
  end,
})


-- user event that loads after UIEnter + only if file buf is there
autocmd({ "UIEnter", "BufReadPost", "BufNewFile" }, {
  group = augroup("NvFilePost", { clear = true }),
  callback = function(args)
    local file = buf_get_name(args.buf)
    local buftype = get_option_value("buftype", { buf = args.buf })

    if not ui_entered and args.event == "UIEnter" then
      ui_entered = true
    end

    if file ~= "" and buftype ~= "nofile" and ui_entered then
      exec_autocmds("User", { pattern = "FilePost", modeline = false })
      del_augroup_by_name "NvFilePost"
      schedule(function()
        exec_autocmds("FileType", {})
        if v.g.editorconfig then
          require("editorconfig").config(args.buf)
        end
      end)
    end
  end,
})
