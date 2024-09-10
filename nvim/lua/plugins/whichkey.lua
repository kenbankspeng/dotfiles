return {
  {
    "folke/which-key.nvim",
    event = "VeryLazy",
    opts_extend = { "spec" },
    config = function()
      local opts = {
        preset = "helix", --  "classic" | "modern" | "helix"
      }
      require('which-key').setup(opts)
    end
  },
}
