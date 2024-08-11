-- delete all keymaps in mode
return function(mode)
  for _, keymap in ipairs(vim.api.nvim_get_keymap(mode)) do
    vim.keymap.del(mode, keymap.lhs)
  end
end
