local result = {
  "col",
  {
    {
      "row",
      {
        { "leaf", 1000 },
        { "leaf", 1017 }
      }
    },
    {
      "row",
      {
        { "leaf", 1007 },
        { "leaf", 1011 }
      }
    },
    {
      "row",
      {
        { "leaf", 1009 },
        { "leaf", 1010 }
      }
    }
  }
}


return function()
  print(vim.inspect(vim.fn.winlayout()))
  return require('oil').select()
end
