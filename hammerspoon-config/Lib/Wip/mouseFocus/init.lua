-- currently unusable - stops after 40 seconds - leaks?

local mousePoint = require("hs.mouse")
local window = require("hs.window")
local geometry = require("hs.geometry")
local timer = require("hs.timer")

local module = {}

function module.init()
	local tick = timer.doEvery(1, function()
		print("tick")
		-- mousePoint.absolutePosition()
		window.orderedWindows()
		-- for _, window in ipairs(windows) do
		--   if geometry(mousePoint):inside(window:frame()) then
		--     window:focus()
		--     break
		--   end
		-- end
	end)
end

return module
