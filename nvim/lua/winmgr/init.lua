local map = function(keys, func, desc)
  vim.keymap.set("n", keys, func, { desc = desc })
end

local function register(key, action)
  if action == "left" then
    map(key, require("winmgr.mux").left, "parent")
  elseif action == "right" then
    map(key, require("winmgr.mux").right, "right")
  elseif action == "toggle_detail" then
    map(key, require("winmgr.toggle_detail").toggle_detail)
  elseif action == "open" then
    map(key, require("winmgr.open").open, "open parent directory")
  elseif action == "close" then
    map(key, require("winmgr.close").close, "close oil")
  end
end

return {
  register = register,
  select = require("winmgr.select"),
}
