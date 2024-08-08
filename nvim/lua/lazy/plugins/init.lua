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
  'trouble',
  'autopairs',
  'indent_line',
  -- TBD
  -- 'debug',
  -- 'lint',
  -- 'gitsigns-adv',
  -- 'custom.my-plugin',
  -- RRethy/vim-illuminate
  -- windwp/nvim-ts-autotag
  -- evinhwang91/nvim-ufo
  -- rcarriga/nvim-notify
  -- nvimtools/none-ls.nvim
  -- plenary.nvim
  -- onsails/lspkind.nvim
  -- rebelot/heirline.nvim
  -- stevearc/dressing.nvim
  -- mfussenegger/nvim-dap
  -- JoosepAlviste/nvim-ts-context-commentstring
  -- numToStr/Comment.nvim
  -- max397574/better-escape.nvim
  -- goolord/alpha-nvim
  -- stevearc/aerial.nvim
  -- hrsh7th/nvim-cmp
  -- saadparwaiz1/cmp_luasnip
  -- hrsh7th/cmp-nvim-lua
  -- hrsh7th/cmp-nvim-lsp
  -- hrsh7th/cmp-buffer
  -- hrsh7th/cmp-path
  -- neoclide/coc.nvim
}

-- table of plugin configs
local plugins = {}
for _, filename in ipairs(plugin_filenames) do
  local plugin_path = 'lazy.plugins.' .. filename
  table.insert(plugins, require(plugin_path))
end

return plugins
