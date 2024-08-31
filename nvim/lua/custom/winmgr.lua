local autoclose = false

local function get_autoclose()
  return autoclose
end

local function neotree_float()
  autoclose = true
  vim.cmd("Neotree toggle")
end

local function neotree_left()
  autoclose = false
  vim.cmd("Neotree left toggle")
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

return {
  close = close,
  get_autoclose = get_autoclose,
  neotree_float = neotree_float,
  neotree_left = neotree_left,
}
