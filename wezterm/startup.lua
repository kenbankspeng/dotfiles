local wezterm = require 'wezterm'
local mux = wezterm.mux

return function(options)
  options = options or {}

  -- gui-startup
  wezterm.on('gui-startup', function(cmd)
    local tab, pane, window = mux.spawn_window(cmd or {})
    local gui = window:gui_window()

    -- max or position, not both
    if options.max then
      gui:maximize()
    elseif options.position then
      local x = options.position.x
      local y = options.position.y
      local w = options.position.w
      local h = options.position.h
      gui:set_position(x, y)
      gui:set_inner_size(w, h)
    end

    if #options.args then
      pane:send_text(table.concat(options.args, ' ') .. '\n')
    end

    local split = options.split
    if split then
      local split_pane = pane:split {
        size = split.size or 0.5,
        direction = split.direction or 'Right',
      }
      if #split.args then
        wezterm.sleep_ms(100)
        split_pane:send_text(table.concat(split.args, ' ') .. '\n')
      end
    end

    window:activate_pane(pane)
  end)
end
