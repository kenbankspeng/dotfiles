-- add more plugin filenames here

local plugin_filenames = {
  'plenary',
  'vim-sleuth',
  'numbertoggle',
  'telescope',
  'lsp.lazydev',
  'lsp.luvit-meta',
  'lsp.nvim-lspconfig',
  'autocomplete',
  'colorscheme',
  'todo-comments',
  'misc',
  'yazi',
  'lazygit',
  'trouble',
  'autopairs',
  'gitsigns-basic',
  'which-key',
  'autoformat',
  'treesitter',
  -- TBD
  -- 'nvchad.base46',
  -- 'nvchad.nvim-web-devicons',
  -- 'nvchad.ui',
  -- 'nvchad.nvim-tree',
  -- 'nvchad.indent-blankline',
  -- 'nvchad.which-key',
  -- 'nvchad.autoformat',
  -- 'nvchad.gitsigns',
  -- 'nvchad.mason',      -- check
  -- 'nvchad.lsp-config', -- check
  -- 'nvchad.nvim-cmp',
  -- 'nvchad.telescope',  -- check
  -- 'nvchad.colorizer',
  -- 'nvchad.treesitter',
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
