-- If there are multiple windows, just close the current one
-- Only one window, delete the buffer
local function smart_close()
  local buf = vim.api.nvim_get_current_buf()
  local wins = vim.fn.win_findbuf(buf)
  if #wins > 1 then
    vim.cmd('close')
  else
    vim.cmd('bdelete')
  end
end

return {
  smart_close = smart_close
}
