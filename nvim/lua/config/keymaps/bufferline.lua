-- BUFFERLINE --
return function(map)
  map('H', '<cmd>BufferLineCyclePrev<CR>', 'Prev Buffer')
  map('L', '<cmd>BufferLineCycleNext<CR>', 'Next Buffer')
  map('<S-Tab>', '<cmd>BufferLineCyclePrev<CR>', 'Prev Buffer')
  map('<Tab>', '<cmd>BufferLineCycleNext<CR>', 'Next Buffer')
  map('<C-S-Tab>', '<cmd>tabnew %<CR>', 'New Tab')
end
