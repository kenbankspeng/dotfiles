-- GENERAL --
return function(map)
  -- Remap Q to start/stop recording a macro (requires a register)
  vim.keymap.set('n', 'Q', 'q', { noremap = true })
end
