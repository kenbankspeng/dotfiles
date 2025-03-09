local wezterm = require('wezterm')

local quick_select_patterns = {
  '[0-9a-f]{7,40}', -- sha1 hash
}

local quick_select_open_url = {
  label = 'open url',
  patterns = {
    '\\((https?://\\S+)\\)',
    '\\[(https?://\\S+)\\]',
    '\\{(https?://\\S+)\\}',
    '<(https?://\\S+)>',
    '\\bhttps?://\\S+[)/a-zA-Z0-9-]+'
  },
  action = wezterm.action_callback(function(window, pane)
    local url = window:get_selection_text_for_pane(pane)
    wezterm.log_info('opening: ' .. url)
    wezterm.open_with(url)
  end),
}

return {
  quick_select_patterns = quick_select_patterns,
  quick_select_open_url = quick_select_open_url,
}
