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
  local command = vim.deepcopy(cmd)
  table.insert(command, 1, "wezterm")
  table.insert(command, 2, "cli")
  return vim.system(command)
end

local function send_key_to_wezterm(direction)
  -- wezterm uses left, down, up, right for directions
  wezterm_exec({ "activate-pane-direction", wezterm_directions[direction] })
end

return function(direction)
  if at_edge(direction) then
    send_key_to_wezterm(direction)
  else
    -- vim functions use h, j, k, l for directions
    vim.cmd("wincmd " .. direction)
  end
end
