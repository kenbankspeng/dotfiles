local treeMode

local function is_sidebar()
  return treeMode == 'sidebar'
end

local function is_float()
  return treeMode == 'float'
end

local function neotree_float()
  treeMode = 'float'
  vim.cmd("Neotree float toggle")
end

local function neotree_left()
  treeMode = 'sidebar'
  vim.cmd("Neotree left toggle")
end

local function file_name(path)
  return path:match("([^/]+)$")
end

local function count_non_ui_windows()
  local count = 0
  for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
    local win_config = vim.api.nvim_win_get_config(win)
    if not win_config.relative or win_config.relative == '' then
      count = count + 1
    end
  end
  return count
end

local function close()
  local buf = vim.api.nvim_get_current_buf()
  local num_buffers = #vim.fn.getbufinfo({ buflisted = 1 })
  local num_windows = count_non_ui_windows() -- Count only non-UI windows

  local current_buffer_name = vim.api.nvim_buf_get_name(buf)

  print("Current buffer:", file_name(current_buffer_name))
  print("#buffers:", num_buffers, "#windows", num_windows)


  -- Check if the buffer is displayed in another window
  local is_open_in_other_windows = false
  local current_window_id = vim.api.nvim_get_current_win()
  for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
    if vim.api.nvim_win_get_buf(win) == buf and win ~= current_window_id then
      is_open_in_other_windows = true
      break
    end
  end

  if is_open_in_other_windows then
    print("Action: Buffer is open in another window, closing current window id:", current_window_id)
    vim.api.nvim_win_close(current_window_id, true)
    return
  end

  if num_buffers > num_windows then
    print("Action: More buffers than windows")

    local current_window_count = 0
    local buffers = vim.fn.getbufinfo({ buflisted = 1 })

    for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
      local win_buf = vim.api.nvim_win_get_buf(win)
      print("Action: Check window")
      print("Window ID:", win, " in buffer:", file_name(vim.api.nvim_buf_get_name(win_buf)))
      if win_buf == buf then
        current_window_count = current_window_count + 1
      end
    end

    if current_window_count > 1 then
      print("Action: Current buffer is open in multiple windows")
      for _, buffer in ipairs(buffers) do
        local buffer_name = vim.api.nvim_buf_get_name(buffer.bufnr)
        print("Action: Comparing with buffer:", file_name(buffer_name))

        if buffer.bufnr ~= buf and vim.fn.buflisted(buffer.bufnr) == 1 then
          local is_in_window = false
          for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
            if vim.api.nvim_win_get_buf(win) == buffer.bufnr then
              is_in_window = true
              print("Action: Buffer", file_name(buffer_name), " is in window id:", win)
              break
            end
          end
          if not is_in_window then
            vim.api.nvim_set_current_buf(buffer.bufnr)
            print("Action: Switched to buffer:", file_name(buffer_name))
            return
          end
        end
      end
    else
      print("Action: Current buffer is only in the current window")
      for _, buffer in ipairs(buffers) do
        local buffer_name = vim.api.nvim_buf_get_name(buffer.bufnr)
        print("Action: Comparing with buffer name:", file_name(buffer_name))
        if buffer.bufnr ~= buf and vim.fn.buflisted(buffer.bufnr) == 1 then
          local is_in_window = false
          for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
            if vim.api.nvim_win_get_buf(win) == buffer.bufnr then
              is_in_window = true
              print("Action: Buffer ", file_name(buffer_name), " is in window Id:", win)
              break
            end
          end
          if not is_in_window then
            vim.api.nvim_set_current_buf(buffer.bufnr)
            vim.api.nvim_buf_delete(buf, { force = true }) -- Use force to avoid errors
            print("Action: Closed buffer ", file_name(current_buffer_name))
            print("Action: Switched to buffer:", file_name(buffer_name))
            return
          end
        end
      end
      print("Action: No available buffer to switch to.")
    end
  else
    if num_windows == 1 and num_buffers == 1 then
      print("Action: Only one window and buffer left, quitting.")
      vim.cmd('q')
      return
    end

    print("Action: Closing current window.")
    local current_window_count = 0
    for _, win in ipairs(vim.api.nvim_tabpage_list_wins(0)) do
      local win_buf = vim.api.nvim_win_get_buf(win)
      if win_buf == buf then
        current_window_count = current_window_count + 1
      end
    end

    if current_window_count > 1 then
      print("Action: Just close the current window")
      print("Current window ID:", 0)
      vim.api.nvim_win_close(0, true)
    else
      print("Action: Closing the last window of the buffer")
      print("Current window ID:", 0)
      vim.api.nvim_win_close(0, true)
      vim.api.nvim_buf_delete(buf, { force = true }) -- Use force to avoid errors
    end
  end
end


return {
  close = close,
  is_float = is_float,
  is_sidebar = is_sidebar,
  neotree_float = neotree_float,
  neotree_left = neotree_left,
}
