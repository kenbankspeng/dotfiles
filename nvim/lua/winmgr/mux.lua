local oil = require("oil")
local actions = require("oil.actions")


local function is_oil_open()
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

local left = mux(go_left, actions.parent.callback)
local right = mux(go_right, maybe_go_right_maybe_cd)

return {
  left = left,
  right = right,
}
