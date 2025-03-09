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

local merge = require('config.util').merge
local keymaps = require('config.keymaps')
local layers = require('config.colors.layers')
merge(keymaps.keys, layers)

-- full configs
local Config = require('config')
return Config:init()
    :append(keymaps)
    :append(require('config.colors.appearance'))
    :append(require('config.font'))
    :append(require('config.general'))
    :append(require('config.gpu.gpu'))
    :append(require('config.domains'))
    .options
