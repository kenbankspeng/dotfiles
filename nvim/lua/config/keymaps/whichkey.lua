-- WHICHKEY -- document existing key chains

return function(map)
  require('which-key').add({
    { '<leader>b', group = '+buffer' },
    { '<leader>c', group = '+code' },
    { '<leader>d', group = '+lsp', icon = '' },
    { '<leader>f', group = '+find/+file' },
    { '<leader>g', group = '+git' },
    { '<leader>q', group = '+session' },
    { '<leader>s', group = '+search' },
    { '<leader>u', group = '+toggle' },
    { '<leader>x', group = '+lists', icon = '' },
    { '<leader>y', group = '+yazi', icon = '󰇥' },
  })
end
