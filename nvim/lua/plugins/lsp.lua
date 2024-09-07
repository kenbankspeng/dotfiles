return {
  {
    -- collection of lsp config defaults so we don't have to
    'neovim/nvim-lspconfig',
    -- will merge with lavyvim config
    dependencies = {
      -- status updates for LSP loading - bottom right corner
      {
        'j-hui/fidget.nvim',
        opts = {}
      },

      -- Allows extra capabilities provided by nvim-cmp
      'hrsh7th/cmp-nvim-lsp',
    },
    -- config = function()
    --   -- LSP stands for Language Server Protocol. It's a protocol that helps editors
    --   -- and language tooling communicate in a standardized fashion.
    --   --
    --   -- In general, you have a "server" which is some tool built to understand a particular
    --   -- language (such as `gopls`, `lua_ls`, `rust_analyzer`, etc.). These Language Servers
    --   -- (sometimes called LSP servers, but that's kind of like ATM Machine) are standalone
    --   -- processes that communicate with some "client" - in this case, Neovim!
    --   --
    --   -- LSP provides Neovim with features like:
    --   --  - Go to definition
    --   --  - Find references
    --   --  - Autocompletion
    --   --  - Symbol Search
    --   --  - and more!
    --   --
    --   -- Thus, Language Servers are external tools that must be installed separately from
    --   -- Neovim. This is where `mason` and related plugins come into play.
    --   --
    --   -- If you're wondering about lsp vs treesitter, you can check out the wonderfully
    --   -- and elegantly composed help section, `:help lsp-vs-treesitter`

    --   --  This function gets run when an LSP attaches to a particular buffer.
    --   --    That is to say, every time a new file is opened that is associated with
    --   --    an lsp (for example, opening `main.rs` is associated with `rust_analyzer`) this
    --   --    function will be executed to configure the current buffer
    --   vim.api.nvim_create_autocmd('LspAttach', {
    --     group = vim.api.nvim_create_augroup('kickstart-lsp-attach', { clear = true }),
    --     callback = function(event)
    --       -- NOTE: Remember that Lua is a real programming language, and as such it is possible
    --       -- to define small helper and utility functions so you don't have to repeat yourself.
    --       --
    --       -- In this case, we create a function that lets us more easily define mappings specific
    --       -- for LSP related items. It sets the mode, buffer and description for us each time.
    --       local map = function(keys, func, desc)
    --         vim.keymap.set('n', keys, func, { buffer = event.buf, desc = 'LSP: ' .. desc })
    --       end

    --       -- Jump to the definition of the word under your cursor.
    --       --  This is where a variable was first declared, or where a function is defined, etc.
    --       --  To jump back, press <C-t>.
    --       map('gd', require('telescope.builtin').lsp_definitions, 'definition')

    --       -- Find references for the word under your cursor.
    --       map('gr', require('telescope.builtin').lsp_references, 'references')

    --       -- Jump to the implementation of the word under your cursor.
    --       --  Useful when your language has ways of declaring types without an actual implementation.
    --       map('gI', require('telescope.builtin').lsp_implementations, 'implementation')

    --       -- Jump to the type of the word under your cursor.
    --       --  Useful when you're not sure what type a variable is and you want to see
    --       --  the definition of its *type*, not where it was *defined*.
    --       map('<leader>D', require('telescope.builtin').lsp_type_definitions, 'type definition')

    --       -- Fuzzy find all the symbols in your current document.
    --       --  Symbols are things like variables, functions, types, etc.
    --       map('<leader>ds', require('telescope.builtin').lsp_document_symbols, 'document symbols')

    --       -- Fuzzy find all the symbols in your current workspace.
    --       --  Similar to document symbols, except searches over your entire project.
    --       map('<leader>ws', require('telescope.builtin').lsp_dynamic_workspace_symbols, 'workspace symbols')

    --       -- Rename the variable under your cursor.
    --       --  Most Language Servers support renaming across files, etc.
    --       map('<leader>dr', vim.lsp.buf.rename, 'rename')

    --       -- Execute a code action, usually your cursor needs to be on top of an error
    --       -- or a suggestion from your LSP for this to activate.
    --       map('<leader>ca', vim.lsp.buf.code_action, 'code action')

    --       -- WARN: This is not Goto Definition, this is Goto Declaration.
    --       --  For example, in C this would take you to the header.
    --       map('gD', vim.lsp.buf.declaration, 'declaration')

    --       -- The following two autocommands are used to highlight references of the
    --       -- word under your cursor when your cursor rests there for a little while.
    --       --    See `:help CursorHold` for information about when this is executed
    --       --
    --       -- When you move your cursor, the highlights will be cleared (the second autocommand).
    --       local client = vim.lsp.get_client_by_id(event.data.client_id)
    --       if client and client.supports_method(vim.lsp.protocol.Methods.textDocument_documentHighlight) then
    --         local highlight_augroup = vim.api.nvim_create_augroup('kickstart-lsp-highlight', { clear = false })
    --         vim.api.nvim_create_autocmd({ 'CursorHold', 'CursorHoldI' }, {
    --           buffer = event.buf,
    --           group = highlight_augroup,
    --           callback = vim.lsp.buf.document_highlight,
    --         })

    --         vim.api.nvim_create_autocmd({ 'CursorMoved', 'CursorMovedI' }, {
    --           buffer = event.buf,
    --           group = highlight_augroup,
    --           callback = vim.lsp.buf.clear_references,
    --         })

    --         vim.api.nvim_create_autocmd('LspDetach', {
    --           group = vim.api.nvim_create_augroup('kickstart-lsp-detach', { clear = true }),
    --           callback = function(event2)
    --             vim.lsp.buf.clear_references()
    --             vim.api.nvim_clear_autocmds { group = 'kickstart-lsp-highlight', buffer = event2.buf }
    --           end,
    --         })
    --       end

    --       -- The following code creates a keymap to toggle inlay hints in your
    --       -- code, if the language server you are using supports them
    --       --
    --       -- This may be unwanted, since they displace some of your code
    --       -- if client and client.supports_method(vim.lsp.protocol.Methods.textDocument_inlayHint) then
    --       --   map('<leader>th', function()
    --       --     vim.lsp.inlay_hint.enable(not vim.lsp.inlay_hint.is_enabled { bufnr = event.buf })
    --       --   end, '[T]oggle Inlay [H]ints')
    --       -- end
    --     end,
    --   })

    --   -- return config options for setup({options})
    --   return {
    --     -- Enable the following language servers
    --     --  Feel free to add/remove any LSPs that you want here. They will automatically be installed.
    --     --
    --     --  Add any additional override configuration in the following tables. Available keys are:
    --     --  - cmd (table): Override the default command used to start the server
    --     --  - filetypes (table): Override the default list of associated filetypes for the server
    --     --  - capabilities (table): Override fields in capabilities. Can be used to disable certain LSP features.
    --     --  - settings (table): Override the default settings passed when initializing the server.
    --     --        For example, to see the options for `lua_ls`, you could go to: https://luals.github.io/wiki/settings/

    --     servers = {
    --       -- See `:help lspconfig-all` for a list of all the pre-configured LSPs

    --       -- lua_ls configured by lazyvim
    --       -- lua_ls = {
    --       --   settings = {
    --       --     Lua = {
    --       --       -- You can toggle below to ignore Lua_LS's noisy `missing-fields` warnings
    --       --       -- diagnostics = { disable = { 'missing-fields' } },
    --       --     },
    --       --   },
    --       -- },

    --       marksman = {}
    --       -- equivalent to nvim-lspconfig defaults:
    --       --   require 'lspconfig'.marksman.setup({
    --       --     cmd = { "marksman", "server" },
    --       --     filetypes = { "markdown", "markdown.mdx" },
    --       --     root_dir = root_pattern(".git", ".marksman.toml"),
    --       --     single_file_support = true
    --       --   })
    --     }
    --   }
    -- end
  }
}
