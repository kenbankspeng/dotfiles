local obj = {}
obj.__index = obj

-- Metadata
obj.name = "HCalendar"
obj.version = "2.0"
obj.author = "{ ken }"
obj.homepage = "https://github.com/Hammerspoon/Spoons"
obj.license = "MIT - https://opensource.org/licenses/MIT"

-- based off of HCalendar by "ashfinal <ashfinal@gmail.com>" "https://github.com/Hammerspoon/Spoons"

-- calander configuration parameters
local dayWidth = 30
local padding = 10
local textSize = 12
local day1x = 90
obj.param = {
	canvas = {
		width = dayWidth * 31 + 2 * padding + 80,
		height = 50,
		fillColor = { hue = 240 / 360, saturation = 0.5, brightness = 0.2, alpha = 1 },
		margin = { left = 220, bottom = 20 },
		padding = padding,
		radius = 10,
	},
	selector = {
		title = {
			x = padding,
			y = 6,
			width = 60,
			height = textSize * 1.2,
			textSize = textSize,
			textColor = { hue = 240 / 360, saturation = 0.5, brightness = 1, alpha = 1 },
		},
		button = {
			prev = { x = 20, y = 26 },
			next = { x = 46, y = 26 },
			width = 16,
			height = 16,
			fillColor = { hue = 240 / 360, saturation = 0.5, brightness = 0.8, alpha = 1 },
			strokeColor = { hue = 240 / 360, saturation = 0.5, brightness = 0.8, alpha = 1 },
			strokeWidth = 0.6,
		},
	},
	dow = {
		x = day1x,
		y = 8,
		width = dayWidth,
		height = textSize * 1.2,
		textSize = textSize,
		textColor = { hue = 0 / 360, saturation = 0, brightness = 1, alpha = 1 },
		weekend = { hue = 0 / 360, saturation = 0.6, brightness = 1, alpha = 1 },
	},
	midline = {
		x = day1x,
		y = 23,
		width = dayWidth,
		height = 4,
		fillColor = { hue = 0 / 360, saturation = 0, brightness = 1, alpha = 0.3 },
		weekend = { hue = 0 / 360, saturation = 0.6, brightness = 1, alpha = 1 },
	},
	dom = {
		x = day1x,
		y = 28,
		width = dayWidth,
		height = textSize * 1.2,
		textSize = textSize,
		textColor = { hue = 0 / 360, saturation = 0, brightness = 1, alpha = 1 },
		weekend = { hue = 0 / 360, saturation = 0.6, brightness = 1, alpha = 1 },
	},
	todayIndicator = {
		y = 6,
		width = dayWidth - 2, -- does not need to be the same as dayWidth
		height = 39,
		textSize = textSize,
		textColor = { hue = 60 / 360, saturation = 1, brightness = 1, alpha = 1 },
		fillColor = { hue = 240 / 360, saturation = 1, brightness = 0.1, alpha = 0 },
		strokeColor = { hue = 60 / 360, saturation = 1, brightness = 0.8, alpha = 1 },
		strokeWidth = 2,
		radius = 10,
		midlineFillColor = nil,
	},
}

-- calendar
obj.hcal = dofile(hs.spoons.resourcePath("hcal.lua"))(obj.param)

function obj:stop()
	obj.hcal:stop()
end

function obj:start()
	obj.hcal:start()
end

function obj:init()
	obj.hcal:init()
end

return obj
