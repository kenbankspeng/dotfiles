local group = dofile(hs.spoons.resourcePath("helper.lua"))

local obj = {}
obj.__index = obj

-- Metadata
obj.name = "Alert"
obj.version = "1.1"
obj.author = "Ken"
obj.license = "MIT - https://opensource.org/licenses/MIT"

local defaultConfig = {
	padding = 20,
	borderRadius = 10,
	fontSize = 24,
	textColor = { hue = 194 / 360, saturation = 1, brightness = 0.9, alpha = 1 },
	backgroundColor = { hue = 194 / 360, saturation = 0.6, brightness = 0.11, alpha = 1 },
	gradient = nil,
	borderColor = { hue = 194 / 360, saturation = 1, brightness = 0.6, alpha = 1 },
	fadeInDuration = 0.3,
	fadeOutDuration = 0.3,
	motionDuration = 0.05,
	placementPercentage = 50,
	marginPercentage = 0,
	minWidth = 200,
	sliderLocation = "bottom",
	animationSteps = 10,
}

local canvas = nil
local initialX, initialY, finalX, finalY
local activeConfig = {}
local spaceWatcher = nil
local lastMessage = nil

-- Show a new canvas with animation
local function _showNewCanvas(msg, options, initialX, initialY, finalX, finalY, boxWidth, boxHeight)
	canvas = group.createCanvasElement(options, boxWidth, boxHeight, initialX, initialY)
	assert(canvas, "Failed to create canvas")

	canvas:alpha(0)
	canvas:show(0)

	hs.timer.doAfter(0.01, function()
		group.animateCanvasMovement(
			canvas,
			{ x = initialX, y = initialY, w = boxWidth, h = boxHeight },
			{ x = finalX, y = finalY, w = boxWidth, h = boxHeight },
			options.motionDuration,
			activeConfig.animationSteps,
			function()
				group.updateCanvasText(canvas, msg, options)
			end
		)

		hs.timer.doAfter(options.motionDuration / defaultConfig.animationSteps, function()
			local currentStep = 0
			local stepDuration = options.motionDuration / defaultConfig.animationSteps
			local function fadeStep()
				if currentStep < defaultConfig.animationSteps then
					currentStep = currentStep + 1
					canvas:alpha(currentStep / defaultConfig.animationSteps)
					hs.timer.doAfter(stepDuration, fadeStep)
				end
			end
			fadeStep()
		end)
	end)
end

-- Show an existing canvas without recreating it
local function _showExistingCanvas(msg, options, finalX, finalY, boxWidth, boxHeight)
	if canvas then
		canvas:delete()
	end
	canvas = group.createCanvasElement(options, boxWidth, boxHeight, finalX, finalY)
	assert(canvas, "Failed to create canvas")

	canvas:frame({ x = finalX, y = finalY, w = boxWidth, h = boxHeight })
	canvas:show(0)
	group.updateCanvasText(canvas, msg, options)
end

-- Display the alert
function obj:show(msg, overrides)
	activeConfig = group.getConfig(overrides, defaultConfig)
	lastMessage = msg -- Store the last message

	local screenFrame = hs.screen.mainScreen():fullFrame()
	local styledText = hs.styledtext.new(msg, { font = { name = "Helvetica", size = activeConfig.fontSize } })
	local textSize = hs.drawing.getTextDrawingSize(styledText) or { w = 50, h = 10 }
	local boxWidth = math.max(textSize.w + activeConfig.padding * 2, activeConfig.minWidth)
	local boxHeight = textSize.h + activeConfig.padding * 2

	initialX, initialY, finalX, finalY = group.calculateSlidePositions(activeConfig, screenFrame, boxWidth, boxHeight)

	if not canvas then
		_showNewCanvas(msg, activeConfig, initialX, initialY, finalX, finalY, boxWidth, boxHeight)
	elseif activeConfig.redraw then
		_showExistingCanvas(msg, activeConfig, finalX, finalY, boxWidth, boxHeight)
	else
		group.updateCanvasText(canvas, msg, activeConfig)
	end

	if not spaceWatcher then
		spaceWatcher = hs.spaces.watcher.new(function()
			if canvas then
				_showExistingCanvas(lastMessage, activeConfig, finalX, finalY, boxWidth, boxHeight)
			end
		end)
		spaceWatcher:start()
	end
end

-- Clear the alert
function obj:clear()
	if not canvas then
		return
	end

	local alertCanvas = canvas
	canvas = nil

	group.animateCanvasMovement(
		alertCanvas,
		{ x = finalX, y = finalY, w = alertCanvas:frame().w, h = alertCanvas:frame().h },
		{ x = initialX, y = initialY, w = alertCanvas:frame().w, h = alertCanvas:frame().h },
		activeConfig.motionDuration,
		activeConfig.animationSteps,
		function()
			alertCanvas:hide(0)
			hs.timer.doAfter(0.01, function()
				if alertCanvas then
					alertCanvas:delete()
				end
			end)
		end
	)

	if spaceWatcher then
		spaceWatcher:stop()
		spaceWatcher = nil
	end
end

-- Start the alert system with custom configuration
function obj:start(customConfig)
	if customConfig then
		for k, v in pairs(customConfig) do
			defaultConfig[k] = v
		end
	end
end

return obj
