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

local merge = require('util').merge
local keymaps = require('config.keymaps')
local layers = require('colors.layers')
merge(keymaps.keys, layers)

-- full configs
local Config = require('config')
return Config:init()
    :append(keymaps)
    :append(require('config.appearance'))
    :append(require('config.fonts'))
    :append(require('config.general'))
    :append(require('config.domains'))
    .options
