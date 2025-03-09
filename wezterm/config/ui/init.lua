require('config.ui.layers')

local merge = require('config.util').merge
  
local ui = {}
merge(ui, require('config.ui.appearance'))
merge(ui, require('config.ui.colors'))

return ui
