-- opts merged with lavyvim config
return {
  {
    "folke/which-key.nvim",
    event = "VeryLazy",
    opts_extend = { "spec" },
    opts = {
      win = {
        no_overlap = false,
        width = 0.9,
        height = { min = 10, max = 35 },
        col = 0.5,
        row = -1,
        border = "rounded",
        title = true,
        title_pos = "center",
        bo = {},
        wo = {
          -- winblend = 10, -- value between 0-100 0 for fully opaque and 100 for fully transparent
        },
      },
    }
  },
}
