-- toggle details
local function toggle_detail()
  detail = not detail
  if detail then
    require("oil").set_columns({ "icon", "permissions", "size", "mtime" })
  else
    require("oil").set_columns({ "icon" })
  end
end

return {
  toggle_detail = toggle_detail,
}
