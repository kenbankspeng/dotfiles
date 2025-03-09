local wezterm = require("wezterm")

--
-- wezterm/nvim integration of window splits
--

local function is_vim(pane)
  local process_info = pane:get_foreground_process_info()
  local process_name = process_info and process_info.name

  return process_name == "nvim" or process_name == "vim"
end

local direction_keys = {
  Left = "LeftArrow",
  Down = "DownArrow",
  Up = "UpArrow",
  Right = "RightArrow",
  -- reverse lookup
  LeftArrow = "Left",
  DownArrow = "Down",
  UpArrow = "Up",
  RightArrow = "Right",
}



local function move(mods, key)
  return {
    key = key,
    mods = mods,
    action = wezterm.action_callback(function(win, pane)
      if is_vim(pane) then
        -- pass the keys through to vim/nvim
        win:perform_action({
          SendKey = { key = key, mods = mods },
        }, pane)
      else
        win:perform_action({ ActivatePaneDirection = direction_keys[key] }, pane)
      end
    end),
  }
end

local function resize(mods, key)
  return {
    key = key,
    mods = mods,
    action = wezterm.action_callback(function(win, pane)
      if is_vim(pane) then
        -- pass the keys through to vim/nvim
        win:perform_action({
          SendKey = { key = key, mods = mods },
        }, pane)
      else
        win:perform_action({ AdjustPaneSize = { direction_keys[key], 3 } }, pane)
      end
    end),
  }
end

-- wezterm keys to vim/wezterm pane
local nav_keys = {
  -- move between split panes
  move("SHIFT", "LeftArrow"),
  move("SHIFT", "DownArrow"),
  move("SHIFT", "UpArrow"),
  move("SHIFT", "RightArrow"),
  -- resize panes
  resize("META", "LeftArrow"),
  resize("META", "DownArrow"),
  resize("META", "UpArrow"),
  resize("META", "RightArrow"),
}

return {
  nav_keys = nav_keys,
}
