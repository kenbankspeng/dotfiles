local oil = require("oil")
local actions = require("oil.actions")


local map = function(keys, func, desc)
  vim.keymap.set("n", keys, func, { desc = desc })
end

local detail = false
local function toggle_detail()
  detail = not detail
  if detail then
    require("oil").set_columns({ "icon", "permissions", "size", "mtime" })
  else
    require("oil").set_columns({ "icon" })
  end
end

function is_oil_open()
  return vim.w.is_oil_win
end

local function mux(normal_action, oil_action)
  -- callback
  return function()
    if is_oil_open() then
      oil_action()
    else
      normal_action()
    end
  end
end

local function go_right()
  vim.api.nvim_feedkeys('l', 'n', false) -- go right
end

local function go_left()
  vim.api.nvim_feedkeys('h', 'n', false) -- go left
end

local function maybe_go_right_maybe_cd()
  local entry = oil.get_cursor_entry()
  if entry ~= nil and entry.type == "directory" then
    actions.select.callback()
  end
end

function open_oil()
  return vim.cmd("Oil --float")
end

local function register(key, action)
  if action == "left" then
    map(key, mux(go_left, actions.parent.callback), "parent")
  elseif action == "right" then
    map(key, mux(go_right, maybe_go_right_maybe_cd), "right")
  elseif action == "toggle_detail" then
    map(key, function() toggle_detail() end)
  elseif action == "open" then
    map(key, open_oil, "open parent directory")
  end
end

return {
  register = register,
}
