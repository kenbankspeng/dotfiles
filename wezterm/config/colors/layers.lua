local wezterm = require('wezterm')

local function create_transparent_layer()
  return {
    {
      source = { Color = "black" },
      width = "100%",
      height = "100%",
      opacity = 0.2,
    }
  }
end

wezterm.on('toggle-layers', function(window, pane)
  local overrides = window:get_config_overrides() or {}
  if not overrides.background then
    overrides.background = create_transparent_layer()
  else
    overrides.background = nil
  end
  window:set_config_overrides(overrides)
end)

return {
  {
    key = 'B',
    mods = 'CTRL',
    action = wezterm.action.EmitEvent 'toggle-layers',
  },
} 