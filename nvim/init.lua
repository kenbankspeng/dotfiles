--[[

Kickstart Guide:
  - :Tutor
  - read this guide
  - run AND READ `:help` - keymap "<space>sh"
  - run `:checkhealth`
  - To check the current status of your plugins, run `:Lazy`
  - You can press `?` in this menu for help. Use `:q` to close the window
  - To update plugins you can run `:Lazy update`

--]]

require("config.options")
require("config.keymaps")
require("config.autocommands")
require("lazy.lazy")


-- The line beneath this is called `modeline`. See `:help modeline`
-- vim: ts=2 sts=2 sw=2 et
