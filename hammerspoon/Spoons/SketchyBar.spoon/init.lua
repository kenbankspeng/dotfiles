local obj = {}
obj.__index = obj

-- Metadata
obj.name = "SketchyBar"
obj.version = "1.0"
obj.author = "Ken"
obj.license = "MIT - https://opensource.org/licenses/MIT"


local timer = nil
local pollInterval = 0.1
local previousWindowId = nil
local previousSpaceId = nil

-- Poll the active window and update the highlight
local function _pollActiveWindow()
	local window = hs.window.focusedWindow()
	if window then
		local windowId = window:id()
		local spaceId = hs.spaces.focusedSpace()

		local hasWindowChanged = windowId ~= previousWindowId
		local hasSpaceChanged = spaceId ~= previousSpaceId

		if hasSpaceChanged then
			previousSpaceId = spaceId
			os.execute("/opt/homebrew/bin/sketchybar --trigger space_changed")
		end

		if hasWindowChanged then
			previousWindowId = windowId
			os.execute("/opt/homebrew/bin/sketchybar --trigger focus_changed ID=" .. windowId)
		end
	else
		previousWindowId = nil
		previousSpaceId = nil
	end
end


-- Start the highlight with custom configuration
function obj:start()
	timer = hs.timer.doEvery(pollInterval, _pollActiveWindow)
end

return obj
