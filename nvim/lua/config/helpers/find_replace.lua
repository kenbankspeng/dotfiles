return function()
  require('grug-far').grug_far({ prefills = { search = vim.fn.expand("<cword>") } })
end
