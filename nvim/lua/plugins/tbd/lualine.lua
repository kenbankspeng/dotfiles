-- AVAILABLE COMPONENTS
-- branch (git branch)
-- buffers (shows currently available buffers)
-- diagnostics (diagnostics count from your preferred source)
-- diff (git diff status)
-- encoding (file encoding)
-- fileformat (file format)
-- filename
-- filesize
-- filetype
-- hostname
-- location (location in file in line:column format)
-- mode (vim mode)
-- progress (%progress in file)
-- searchcount (number of search matches when hlsearch is active)
-- selectioncount (number of selected characters or lines)
-- tabs (shows currently available tabs)
-- windows (shows currently available windows)


-- lazyvim config: opts.sections
--   .lualine_a: mode
--   .lualine_b: branch
--   .lualine_c: root_dir, diagnostics icon, filetype icon, pretty_path
--   .lualine_x: noice.api.status.command, noice.api.status.mode, dap.status, lazy.status.updates, git status
--   .lualine_y: progress, location
--   .lualine_z: clock

-- opts.sections - lualine
-- opts.tabline.sections - tabline
-- opts.winbar.sections - winbar

return {
  {
    "nvim-lualine/lualine.nvim",
    opts = function(_, opts)
      opts.winbar = {
        lualine_a = {
          {
            'mode',
            --   tab_max_length = 40,
            --   max_length = vim.o.columns / 3,
            --   mode = 1,
            --   path = 0,
            --   use_mode_colors = true,
            --   tabs_color = {
            --     active = 'lualine_a_normal',
            --     inactive = 'lualine_a_inactive',
            --   },
            --   show_modified_status = true,
            --   symbols = {
            --     modified = '[+]',
            --   },
            --   fmt = function(name, context)
            --     local buflist = vim.fn.tabpagebuflist(context.tabnr)
            --     local winnr = vim.fn.tabpagewinnr(context.tabnr)
            --     local bufnr = buflist[winnr]
            --     local mod = vim.fn.getbufvar(bufnr, '&mod')
            --     return name .. (mod == 1 and ' +' or '')
            --   end
          }
        }
      }
      return opts
    end,
  }
}
