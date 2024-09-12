-- NEOTREE & OIL --
return function(map)
  local winmgr = require('config.custom.winmgr')
  map('<leader><leader>', winmgr.neotree_left, 'toggle neotree left')
  map(',,', '<cmd>Oil --float<CR>', 'open parent directory')
  map('q', winmgr.close, 'close window')
end
