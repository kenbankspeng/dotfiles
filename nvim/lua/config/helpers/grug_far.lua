local function find_replace()
  require('grug-far').grug_far({ prefills = { search = vim.fn.expand("<cword>") } })
end

return {
  find_replace = find_replace,
}
