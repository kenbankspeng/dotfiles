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
merge(config, require('config.keymaps.keymaps'))
merge(config, require('config.ui.appearance'))
merge(config, require('config.font'))
merge(config, require('config.general'))
merge(config, require('config.gpu.gpu'))
merge(config, require('config.domains'))

return config
