-- Nvim split-window integration via smart-splits.nvim

-- [
--     {
--         "action": {
--             "EmitEvent": "user-defined-2",
--         },
--         "key": "h",
--         "mods": "CTRL",
--     },
--     {
--         "action": {
--             "EmitEvent": "user-defined-3",
--         },
--         "key": "j",
--         "mods": "CTRL",
--     },
--     {
--         "action": {
--             "EmitEvent": "user-defined-4",
--         },
--         "key": "k",
--         "mods": "CTRL",
--     },
--     {
--         "action": {
--             "EmitEvent": "user-defined-5",
--         },
--         "key": "l",
--         "mods": "CTRL",
--     },
--     {
--         "action": {
--             "EmitEvent": "user-defined-6",
--         },
--         "key": "h",
--         "mods": "META",
--     },
--     {
--         "action": {
--             "EmitEvent": "user-defined-7",
--         },
--         "key": "j",
--         "mods": "META",
--     },
--     {
--         "action": {
--             "EmitEvent": "user-defined-8",
--         },
--         "key": "k",
--         "mods": "META",
--     },
--     {
--         "action": {
--             "EmitEvent": "user-defined-9",
--         },
--         "key": "l",
--         "mods": "META",
--     },
-- ]

local wezterm = require('wezterm')

-- if you are *NOT* lazy-loading smart-splits.nvim (recommended)
local function is_vim(pane)
  -- this is set by the plugin, and unset on ExitPre in Neovim
  return pane:get_user_vars().IS_NVIM == 'true'
end

-- map('LeftArrow', mod.SHIFT, action.ActivatePaneDirection('Left')),
-- map('RightArrow', mod.SHIFT, action.ActivatePaneDirection('Right')),
-- map('UpArrow', mod.SHIFT, action.ActivatePaneDirection('Up')),
-- map('DownArrow', mod.SHIFT, action.ActivatePaneDirection('Down')),


local direction_keys = {
  h = 'Left',
  j = 'Down',
  k = 'Up',
  l = 'Right',
}

local function split_nav(resize_or_move, key)
  return {
    key = key,
    mods = resize_or_move == 'resize' and 'META' or 'CTRL',
    action = wezterm.action_callback(function(win, pane)
      if is_vim(pane) then
        -- pass the keys through to vim/nvim
        win:perform_action({
          SendKey = { key = key, mods = resize_or_move == 'resize' and 'META' or 'CTRL' },
        }, pane)
      else
        if resize_or_move == 'resize' then
          win:perform_action({ AdjustPaneSize = { direction_keys[key], 3 } }, pane)
        else
          win:perform_action({ ActivatePaneDirection = direction_keys[key] }, pane)
        end
      end
    end),
  }
end

local keys = {
  -- move between split panes
  split_nav('move', 'h'),
  split_nav('move', 'j'),
  split_nav('move', 'k'),
  split_nav('move', 'l'),
  -- resize panes
  split_nav('resize', 'h'),
  split_nav('resize', 'j'),
  split_nav('resize', 'k'),
  split_nav('resize', 'l'),
}

return keys

-- map('LeftArrow', mod.SUPER, action.ActivatePaneDirection('Left')),
-- map('RightArrow', mod.SUPER, action.ActivatePaneDirection('Right')),
-- map('UpArrow', mod.SUPER, action.ActivatePaneDirection('Up')),
-- map('DownArrow', mod.SUPER, action.ActivatePaneDirection('Down')),
-- map('LeftArrow', mod.ALT, action.AdjustPaneSize({ 'Left', 1 })),
-- map('RightArrow', mod.ALT, action.AdjustPaneSize({ 'Right', 1 })),
-- map('UpArrow', mod.ALT, action.AdjustPaneSize({ 'Up', 1 })),
-- map('DownArrow', mod.ALT, action.AdjustPaneSize({ 'Down', 1 })),
