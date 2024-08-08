-- add more plugin filenames here
local plugin_filenames = {
  'vim-sleuth',
  'gitsigns',
  'which-key',
  'telescope',
}

local plugins = {}
for _, filename in ipairs(plugin_filenames) do
  local plugin_path = 'lua.lazy.plugins.' .. filename
  table.insert(plugins, require(plugin_path))
end

return plugins
