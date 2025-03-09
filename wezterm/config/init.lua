-- setup package paths
require('config.path')

-- -- gui pre-init configs
-- require('config.startup')({
--     max = true,
--     -- args = { 'neo' }, -- server
--     -- split = {
--     --     direction = 'Bottom',
--     --     size = 0.10,
--     --     args = { 'neo -c' } -- client
--     -- },
-- })

local merge = require('config.util').merge

local config = {}

local keymaps = require('config.keymaps.keymaps')
merge(keymaps.keys, require('config.ui.layers'))
merge(config, keymaps)
merge(config, require('config.ui.appearance'))
merge(config, require('config.font'))
merge(config, require('config.general'))
merge(config, require('config.gpu.gpu'))
merge(config, require('config.domains'))

return config
