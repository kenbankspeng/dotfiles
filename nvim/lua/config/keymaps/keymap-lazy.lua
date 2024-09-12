--
-- LAZY --
--
-- DELETE unwanted LazyVim/Plugin mappings
--

local del = vim.keymap.del
del('n', '<leader>L')          -- LazyVim Changelog
del('n', '<leader>K')          -- man keyword lookup
del('n', '<C-Up>')             -- Resize window
del('n', '<C-Down>')           -- Resize window
del('n', '<C-Left>')           -- Resize window
del('n', '<C-Right>')          -- Resize window
del('n', '<leader>qq')         -- quit all

del('n', '<leader><Tab>[')     -- real vim tabs
del('n', '<leader><Tab>d')     -- real vim tabs
del('n', '<leader><Tab>]')     -- real vim tabs
del('n', '<leader><Tab><Tab>') -- real vim tabs
del('n', '<leader><Tab>f')     -- real vim tabs
del('n', '<leader><Tab>o')     -- real vim tabs
del('n', '<leader><Tab>l')     -- real vim tabs

del('n', '[b')                 -- Prev Buffer
del('n', ']b')                 -- Next Buffer
del('n', '<leader>bl')         -- Delete Buffers to the Left
del('n', '<leader>br')         -- Delete Buffers to the Right
del('n', '<leader>bo')         -- Delete Other Buffers
del('n', '<leader>bP')         -- Delete Non-Pinned Buffers
del('n', '<leader>bp')         -- Toggle Pin

del('n', '<M-k>')              -- Move Code Up
del('n', '<M-j>')              -- Move Code Down

del('n', '<leader>|')          -- Split Window Right <C-W>v                                             Split Window Right
del('n', '<leader>-')          -- Split Window Below <C-W>s                                             Split Window Below

-- NEOTREE -- cannot disable - so remove keys
del('n', '<leader>E')  -- Explorer NeoTree (cwd)
del('n', '<leader>e')  -- Explorer NeoTree (Root Dir)
del('n', '<leader>fE') -- Explorer NeoTree (cwd)
del('n', '<leader>fe') -- Explorer NeoTree (Root Dir)
