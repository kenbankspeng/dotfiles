return {
  {
    'dense-analysis/ale',
    config = function()
      vim.g.ale_ruby_rubocop_auto_correct_all = 1
      vim.g.ale_linters = {
        ruby = { 'rubocop', 'ruby' },
        lua = { 'lua_language_server' }
      }
    end
  }
}
