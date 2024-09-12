-- NVIM-WEZTERM --

return function(map)
  -- depending on situation, send command to neovim or to wezterm
  local unified = require('config.custom.nvim-wezterm')

  -- splits
  map('<leader>\\', '<C-w>v', 'split right')
  map('<leader>/', '<C-w>s', 'split down')

  -- navigate splits   -- ok
  map('<S-Left>', function() unified.navigate('h') end, 'navigate left')
  map('<S-Down>', function() unified.navigate('j') end, 'navigate down')
  map('<S-Up>', function() unified.navigate('k') end, 'navigate up')
  map('<S-Right>', function() unified.navigate('l') end, 'navigate right')
  -- resize splits   -- ok
  map('<M-Left>', function() unified.resize('h', 2) end, 'resize left')
  map('<M-Down>', function() unified.resize('j', 2) end, 'resize down')
  map('<M-Up>', function() unified.resize('k', 2) end, 'resize up')
  map('<M-Right>', function() unified.resize('l', 2) end, 'resize right')
end
