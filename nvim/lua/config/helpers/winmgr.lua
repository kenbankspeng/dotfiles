local oil = require("oil")
local actions = require("oil.actions")

-- toggle details
local function toggle_detail(detail)
  detail = not detail
  if detail then
    require("oil").set_columns({ "icon", "permissions", "size", "mtime" })
  else
    require("oil").set_columns({ "icon" })
  end
  return detail
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

return {
  mux = mux,
  toggle_detail = toggle_detail,
  go_right = go_right,
  go_left = go_left,
  maybe_go_right_maybe_cd = maybe_go_right_maybe_cd,
}
