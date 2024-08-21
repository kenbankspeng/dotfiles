local toggle_detail = require("winmgr.toggle_detail").toggle_detail
local open = require("winmgr.open").open
local close = require("winmgr.close").close

local map = function(keys, func, desc)
  vim.keymap.set("n", keys, func, { desc = desc })
end

local function register(key, action)
  if action == "left" then
    map(key, require("winmgr.mux").left, "parent")
  elseif action == "right" then
    map(key, require("winmgr.mux").right, "right")
  elseif action == "toggle_detail" then
    map(key, function() toggle_detail() end)
  elseif action == "open" then
    map(key, open, "open parent directory")
  elseif action == "close" then
    map(key, close, "close oil")
  end
end

return {
  register = register,
}
