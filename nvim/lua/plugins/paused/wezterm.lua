-- NVIM-WEZTERM --
-- depending on situation, send command to neovim or to wezterm
local unified = require('config.custom.nvim-wezterm')

return {
  {
    dir = 'custom/nvim-wezterm',
    keys = {
      -- splits
      { '<leader>\\', '<C-w>v',                              'split right' },
      { '<leader>/',  '<C-w>s',                              'split down' },
      -- navigate splits   -- ok
      { '<S-Left>',   function() unified.navigate('h') end,  'navigate left' },
      { '<S-Down>',   function() unified.navigate('j') end,  'navigate down' },
      { '<S-Up>',     function() unified.navigate('k') end,  'navigate up' },
      { '<S-Right>',  function() unified.navigate('l') end,  'navigate right' },
      -- resize splits   -- ok
      { '<M-Left>',   function() unified.resize('h', 2) end, 'resize left' },
      { '<M-Down>',   function() unified.resize('j', 2) end, 'resize down' },
      { '<M-Up>',     function() unified.resize('k', 2) end, 'resize up' },
      { '<M-Right>',  function() unified.resize('l', 2) end, 'resize right' },
    },
  }
}
