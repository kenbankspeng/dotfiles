return {
  {
    -- Install markdown preview, use npx if available.
    -- if this fails, manually install using :call mkdp#util#install()
    "iamcco/markdown-preview.nvim",
    cmd = { "MarkdownPreviewToggle", "MarkdownPreview", "MarkdownPreviewStop" },
    ft = { "markdown" },
    -- build = function() vim.fn["mkdp#util#install"]() end,
    build = function(plugin)
      if vim.fn.executable "npm" then
        vim.cmd("!cd " .. plugin.dir .. " && cd app && npm install")
      else
        vim.cmd [[Lazy load markdown-preview.nvim]]
        vim.fn["mkdp#util#install"]()
      end
    end,
    init = function()
      if vim.fn.executable "npm" then vim.g.mkdp_filetypes = { "markdown" } end
    end,
  }
}
