-- add more plugin filenames here


-- require 'kickstart.plugins.indent_line',
-- require 'kickstart.plugins.lint',
-- require 'kickstart.plugins.autopairs',
-- require 'kickstart.plugins.neo-tree',
-- require 'kickstart.plugins.gitsigns', -- adds gitsigns recommend keymaps

local plugin_filenames = {
  'vim-sleuth',
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
  -- 'kickstart.plugins.debug',
}

local plugins = {}
for _, filename in ipairs(plugin_filenames) do
  local plugin_path = 'lua.lazy.plugins.' .. filename
  table.insert(plugins, require(plugin_path))
end

return plugins
