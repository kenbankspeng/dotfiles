vim.cmd [[highlight IndentBlanklineScope guifg=#FF0000]] -- Change #FF0000 to your desired color

return {
  { -- Add indentation guides even on blank lines
    'lukas-reineke/indent-blankline.nvim',
    -- Enable `lukas-reineke/indent-blankline.nvim`
    -- See `:help ibl`
    main = 'ibl',

    opts = {
      indent = { char = '│' },
      scope = { char = '│' },
    },
  },
}
