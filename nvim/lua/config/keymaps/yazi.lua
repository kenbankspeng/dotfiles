-- YAZI --
return function(map)
  map('<leader>y.', '<cmd>Yazi<CR>', 'Open yazi at the current file')      -- ok
  map('<leader>yy', '<cmd>Yazi cwd<CR>', 'Open yazi at working directory') -- ok
end
