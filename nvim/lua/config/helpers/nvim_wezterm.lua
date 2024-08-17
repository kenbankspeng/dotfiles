--
-- wezterm cli
--

local winnr = vim.fn.winnr

local function wezterm_exec(cmd)
  -- ex. { "wezterm", "cli", "activate-pane-direction", "left" }
  -- ex. { "wezterm", "cli", "adjust-pane-size", "--amount", "2", "up" }
  local command = vim.deepcopy(cmd)
  table.insert(command, 1, "wezterm")
  table.insert(command, 2, "cli")
  return vim.system(command)
end


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


-- if you're at the edge, send the command to wezterm
-- otherwise send command to vim
local function navigate(direction)
  if at_edge(direction) then
    -- wezterm uses left, down, up, right for directions
    wezterm_exec({ "activate-pane-direction", wezterm_directions[direction] })
  else
    -- vim functions use h, j, k, l for directions
    vim.cmd("wincmd " .. direction)
  end
end

--
-- resize splits - nvim and wezterm
--

local function no_nvim_split(direction)
  if direction == 'vertical' then
    return vim.fn.winnr() == vim.fn.winnr('h') and vim.fn.winnr() == vim.fn.winnr('l')
  else
    return vim.fn.winnr() == vim.fn.winnr('j') and vim.fn.winnr() == vim.fn.winnr('k')
  end
end

local function resize_vim_split(direction, amount)
  local cmd = 'resize' .. (amount > 0 and '+' or '') .. amount
  if direction == 'h' or direction == 'l' then
    cmd = 'vertical ' .. cmd
  end
  vim.cmd(cmd)
end

-- rightmost and bottom-most windows are resized in the opposite direction
local function maybe_invert(direction, amount)
  local check = 'j'
  if direction == 'h' or direction == 'l' then
    check = 'l'
  end
  -- if going right doesn't change your window number, then you're at the right edge
  -- if going down doesn't change your window number, then you're at the bottom edge
  if winnr() == winnr(check) then
    amount = -amount
  end
  return amount
end

local function resize(direction, amount)
  local win_nr = vim.fn.winnr() -- get window number
  -- if no nvim split, send command to wezterm
  if no_nvim_split(direction) then
    wezterm_exec({ "adjust-pane-size", "--amount", "2", wezterm_directions[direction] })
  else
    amount = maybe_invert(direction, amount)
    resize_vim_split(direction, amount)
  end
end

return {
  navigate = navigate,
  resize = resize
}
