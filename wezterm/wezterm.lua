-- setup package paths
require('path')

-- -- gui pre-init configs
-- require('startup')({
--     max = true,
--     -- args = { 'neo' }, -- server
--     -- split = {
--     --     direction = 'Bottom',
--     --     size = 0.10,
--     --     args = { 'neo -c' } -- client
--     -- },
-- })

-- full configs
local Config = require('config')
return Config:init()
    :append(require('config.keymaps'))
    :append(require('config.appearance'))
    :append(require('config.fonts'))
    :append(require('config.general'))
    :append(require('config.domains'))
    .options
