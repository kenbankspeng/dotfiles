local obj = {}

local timer = require("hs.timer")

function obj.timestamp(...)
	-- Get the current time with milliseconds using hs.timer
	local seconds = timer.secondsSinceEpoch() or 0
	local date = os.date("*t", math.floor(seconds))
	local milliseconds = string.format("%03d", math.floor((seconds % 1) * 1000))

	-- Format the time string
	local currentTime = string.format("%02d:%02d:%02d:%s", date.hour, date.min, date.sec, milliseconds)
	print(currentTime, ...)
	return currentTime
end

return obj
