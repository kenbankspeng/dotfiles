-- If there are multiple windows, just close the current one
-- Only one window, delete the buffer
local function smart_close()
  local buf = vim.api.nvim_get_current_buf()
  local wins = vim.fn.win_findbuf(buf)
  local num_windows = #vim.api.nvim_tabpage_list_wins(0)
  local num_buffers = #vim.fn.getbufinfo({ buflisted = 1 })

  if num_windows > 1 then
    vim.cmd('close')
  elseif num_buffers > 1 then
    vim.cmd('bdelete')
  else
    -- Check if the buffer has more than one line or if the only line is non-empty
    local line_count = vim.api.nvim_buf_line_count(buf)
    local has_content = line_count > 1 or (line_count == 1 and vim.api.nvim_buf_get_lines(buf, 0, 1, false)[1] ~= "")

    if has_content then
      vim.cmd('bdelete')
    else
      vim.cmd('q')
    end
  end
end

return {
  smart_close = smart_close
}
