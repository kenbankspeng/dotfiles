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

function open()
  return vim.cmd("Oil --float")
end

local function close()
  local buf = vim.api.nvim_get_current_buf()
  local num_buffers = #vim.fn.getbufinfo({ buflisted = 1 })
  local num_windows = #vim.api.nvim_tabpage_list_wins(0)

  if num_windows > 2 then
    vim.cmd('close')
  elseif num_buffers > 1 then
    local buffers = vim.fn.getbufinfo({ buflisted = 1 })
    local current_win = vim.api.nvim_get_current_win()
    local other_buf

    for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
      if win ~= current_win then
        other_buf = vim.api.nvim_win_get_buf(win)
        break
      end
    end

    for _, buffer in ipairs(buffers) do
      if buffer.bufnr ~= buf and buffer.bufnr ~= other_buf then
        vim.api.nvim_set_current_buf(buffer.bufnr)
        vim.api.nvim_buf_delete(buf, {})
        return
      end
    end

    vim.api.nvim_buf_delete(buf, {})
    if num_windows > 1 then
      vim.cmd('close')
    end
  else
    local line_count = vim.api.nvim_buf_line_count(buf)
    local has_content = line_count > 1 or (line_count == 1 and vim.api.nvim_buf_get_lines(buf, 0, 1, false)[1] ~= "")

    if has_content then
      vim.api.nvim_buf_delete(buf, {})
    else
      vim.cmd('q')
    end
  end
end

local function register(key, action)
  if action == "left" then
    map(key, mux(go_left, actions.parent.callback), "parent")
  elseif action == "right" then
    map(key, mux(go_right, maybe_go_right_maybe_cd), "right")
  elseif action == "toggle_detail" then
    map(key, function() toggle_detail() end)
  elseif action == "open" then
    map(key, open, "open parent directory")
  elseif action == "close" then
    map(key, close, "close oil")
  end
end

return {
  register = register,
}
