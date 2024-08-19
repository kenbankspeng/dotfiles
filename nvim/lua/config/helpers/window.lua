local function smart_close()
  local buf = vim.api.nvim_get_current_buf()
  local num_windows = #vim.api.nvim_tabpage_list_wins(0)
  local num_buffers = #vim.fn.getbufinfo({ buflisted = 1 })

  if num_windows > 2 then
    vim.cmd('close')
  elseif num_buffers > 1 then
    -- Get a list of all listed buffers and the current window
    local buffers = vim.fn.getbufinfo({ buflisted = 1 })
    local current_win = vim.api.nvim_get_current_win()
    local other_win, other_buf

    -- Find the other window and its buffer
    for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
      if win ~= current_win then
        other_win = win
        other_buf = vim.api.nvim_win_get_buf(win)
        break
      end
    end

    -- Find a buffer that is not the current buffer and not the buffer in the other window
    for _, buffer in ipairs(buffers) do
      if buffer.bufnr ~= buf and buffer.bufnr ~= other_buf then
        vim.cmd('buffer ' .. buffer.bufnr)
        vim.cmd('bdelete ' .. buf)
        return
      end
    end

    -- If we only have 2 buffers and 2 windows, close one window and delete the current buffer
    vim.cmd('bdelete ' .. buf)
    if num_windows > 1 then
      vim.cmd('close')
    end
  else
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
