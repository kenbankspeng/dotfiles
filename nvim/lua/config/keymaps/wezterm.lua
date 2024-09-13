-- WEZTERM --
-- depending on situation, send command to neovim or to wezterm
local wezterm = require('custom.wezterm')
return function(map)
  -- splits
  map('<leader>\\', '<C-w>v', 'split right')
  map('<leader>/', '<C-w>s', 'split down')
  -- navigate splits   -- ok
  map('<S-Left>', function() wezterm.navigate('h') end, 'navigate left')
  map('<S-Down>', function() wezterm.navigate('j') end, 'navigate down')
  map('<S-Up>', function() wezterm.navigate('k') end, 'navigate up')
  map('<S-Right>', function() wezterm.navigate('l') end, 'navigate right')
  -- resize splits   -- ok
  map('<M-Left>', function() wezterm.resize('h', 2) end, 'resize left')
  map('<M-Down>', function() wezterm.resize('j', 2) end, 'resize down')
  map('<M-Up>', function() wezterm.resize('k', 2) end, 'resize up')
  map('<M-Right>', function() wezterm.resize('l', 2) end, 'resize right')
end
