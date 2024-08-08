-- add more plugin filenames here

local plugin_filenames = {
  'vim-sleuth',
  'numbertoggle',
  'gitsigns-basic',
  'which-key',
  'telescope',
  'lsp.lazydev',
  'lsp.luvit-meta',
  'lsp.nvim-lspconfig',
  'autoformat',
  'autocomplete',
  'colorscheme',
  'todo-comments',
  'misc',
  'treesitter',
  'yazi',
  'lazygit',
  -- 'debug',
  -- 'indent_line',
  -- 'lint',
  -- 'autopairs',
  -- 'neo-tree',
  -- 'gitsigns-adv',
  -- 'custom.my-plugin',
}

-- table of plugin configs
local plugins = {}
for _, filename in ipairs(plugin_filenames) do
  local plugin_path = 'lazy.plugins.' .. filename
  table.insert(plugins, require(plugin_path))
end

return plugins
