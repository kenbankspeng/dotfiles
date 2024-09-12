-- TERMINAL --
return function(map)
  -- fT                                     No command                                         Terminal (cwd)
  -- ft                                     No command                                         Terminal (Root Dir)
  -- <C-/>                                  No command                                         Terminal (Root Dir)
  vim.keymap.set('t', '<Esc><Esc>', '<C-\\><C-n>', { desc = 'Exit terminal mode' })
end
