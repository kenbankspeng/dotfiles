--
-- navigate splits - nvim and wezterm
--

local wezterm_directions = {
  h = "Left",
  j = "Down",
  k = "Up",
  l = "Right"
}

-- vim functions use h, j, k, l for directions
-- ex. if going left doesn't change your window number,
--     then you're at the left edge
local function at_edge(direction)
  return vim.fn.winnr() == vim.fn.winnr(direction)
end

local function wezterm_exec(cmd)
  -- command = { "wezterm", "cli", "activate-pane-direction", "left" }
  -- wezterm cli adjust-pane-size --amount 5 up
  local command = vim.deepcopy(cmd)
  table.insert(command, 1, "wezterm")
  table.insert(command, 2, "cli")
  return vim.system(command)
end

local function send_key_to_wezterm(direction)
  -- wezterm uses left, down, up, right for directions
  wezterm_exec({ "activate-pane-direction", wezterm_directions[direction] })
end

-- if you're at the edge, send the command to wezterm
-- otherwise send command to vim
local function navigate(direction)
  if at_edge(direction) then
    send_key_to_wezterm(direction)
  else
    -- vim functions use h, j, k, l for directions
    vim.cmd("wincmd " .. direction)
  end
end

--
-- resize splits - nvim and wezterm
--

local function resize(direction, amount)
  local win_nr = vim.fn.winnr() -- get window number

  if direction == 'vertical' then
    -- if to nvim split, send command to wezterm


    -- invert if rightmost window
    if win_nr == vim.fn.winnr('l') then
      amount = -amount
    end
    vim.cmd(string.format('vertical resize%s%d', amount > 0 and '+' or '', amount))
  else
    if win_nr == vim.fn.winnr('j') and win_nr == vim.fn.winnr('k') then
      -- if to nvim split, send command to wezterm
    else
      if win_nr == vim.fn.winnr('j') then
        amount = -amount
      end
      vim.cmd(string.format('resize%s%d', amount > 0 and '+' or '', amount))
    end
  end
end

return {
  navigate = navigate,
  resize = resize
}
