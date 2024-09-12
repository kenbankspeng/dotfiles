-- DIAGNOSTICS --
return function(map)
  -- cd                                     No command                                         Line Diagnostics
  -- ud                                     No command                                         Toggle Diagnostics
  -- [d                                     No command                                         Jump to the previous diagnostic
  -- ]d                                     No command                                         Jump to the next diagnostic
  -- <C-W><C-D>                             <C-W>d                                             Show diagnostics under the cursor
  -- <C-W>d                                 No command                                         Show diagnostics under the cursor
  map('<leader>xf', vim.diagnostic.setloclist, 'Open diagnostic [Q]uickfix list')
end
