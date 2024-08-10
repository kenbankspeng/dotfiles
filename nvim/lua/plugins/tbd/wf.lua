-- place in keymaps.lua

-- Register
map("n", "<Space>wr", require("wf.builtin.register")(), { noremap = true, silent = true, desc = "[wf.nvim] register" })
-- Bookmark
map("n", "<Space>wbo", require("wf.builtin.bookmark")({ nvim = "~/.config/nvim", zsh = "~/.zshrc", }),
  { noremap = true, silent = true, desc = "[wf.nvim] bookmark" }
)
-- Buffer
map("n", "<Space>wbu", require("wf.builtin.buffer")(), { noremap = true, silent = true, desc = "[wf.nvim] buffer" })
-- Mark
map("n", "'", require("wf.builtin.mark")(), { nowait = true, noremap = true, silent = true, desc = "[wf.nvim] mark" })
-- Which Key
map("n", "<leader>", require("wf.builtin.which_key")({ text_insert_in_advance = "<Space>" }),
  { noremap = true, silent = true, desc = "[wf.nvim] which-key /", })


return {
  {
    "Cassin01/wf.nvim",
    version = "*",
    config = function()
      require("wf").setup()
    end
  }
}
