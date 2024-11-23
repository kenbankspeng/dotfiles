local obj = {}
obj.__index = obj

-- Metadata
obj.name = "FocusOverlay"
obj.version = "1.6"
obj.author = "Ken"
obj.license = "MIT - https://opensource.org/licenses/MIT"

-- Default configurations
local defaultConfig = {
	fontName = "Marker Felt",
	fontSize = 140,
	backgroundColor = { hue = 240 / 360, saturation = 0, brightness = 0, alpha = 0.8 },
	textColor = { hue = 240 / 360, saturation = 0.8, brightness = 0.8, alpha = 1 },
	borderColor = { hue = 240 / 360, saturation = 0.8, brightness = 0.4, alpha = 1 },
	borderWidth = 40,
	pollInterval = 0.1,
}

local canvas = nil
local timer = nil
local config = {}
local isEnabled = false
local previousWindowId = nil
local previousFrame = nil
local previousSpaceId = nil
local appNames = {}

local function _areFramesEqual(frame1, frame2)
	return frame1.x == frame2.x and frame1.y == frame2.y and frame1.w == frame2.w and frame1.h == frame2.h
end

-- Create a canvas element for the highlight
local function _createCanvasElement(message, frame)
	local newCanvas = hs.canvas.new({ x = frame.x, y = frame.y, w = frame.w, h = frame.h })
	assert(newCanvas, "Failed to create canvas")

	local backgroundElement = {
		type = "rectangle",
		action = "fill",
		fillColor = config.backgroundColor,
		roundedRectRadii = { xRadius = config.borderRadius or 0, yRadius = config.borderRadius or 0 },
	}

	local borderElement = {
		type = "rectangle",
		action = "stroke",
		strokeColor = config.borderColor,
		strokeWidth = config.borderWidth,
		roundedRectRadii = { xRadius = config.borderRadius or 0, yRadius = config.borderRadius or 0 },
	}

	-- Center the text vertically based on the calculated height
	local textElement = {
		type = "text",
		text = message,
		textColor = config.textColor,
		textSize = config.fontSize,
		textAlignment = "center",
		textFont = config.fontName,
		frame = { x = 0, y = (frame.h - config.fontSize) / 2, w = frame.w, h = config.fontSize },
	}

	newCanvas:appendElements(backgroundElement, borderElement, textElement)
	return newCanvas
end

local function _findTextLayer(canvas)
	for i = #canvas, 1, -1 do
		if canvas[i].type == "text" then
			return canvas[i]
		end
	end
	return nil
end

-- Update the canvas element
local function _updateCanvas(message, frame, isNewSpace)
	if not canvas or isNewSpace then
		if canvas then
			canvas:hide()
		end
		canvas = _createCanvasElement(message, frame)
	else
		canvas:frame(frame)
		local textElement = _findTextLayer(canvas)
		if not textElement then
			return -- Exit if no text layer is found
		end

		-- Center the text vertically based on the calculated height
		local newTextFrame = { x = 0, y = (frame.h - config.fontSize) / 2, w = frame.w, h = config.fontSize }

		if textElement.text ~= message or not _areFramesEqual(textElement.frame, newTextFrame) then
			textElement.frame = newTextFrame
			textElement.text = message
		end
	end
	canvas:show()
end

-- Poll the active window and update the highlight
local function _pollActiveWindow()
	local window = hs.window.focusedWindow()
	if window then
		local windowId = window:id()
		local frame = window:frame()
		local spaceId = hs.spaces.focusedSpace()

		local hasWindowChanged = windowId ~= previousWindowId
		local hasFrameChanged = not previousFrame or not _areFramesEqual(frame, previousFrame)
		local hasSpaceChanged = spaceId ~= previousSpaceId

		if hasWindowChanged or hasFrameChanged or hasSpaceChanged then
			previousFrame = frame
			previousWindowId = windowId
			previousSpaceId = spaceId
			local app = window:application()
			if app then
				local appBundleID = app:bundleID()
				local appName = appBundleID and appNames[appBundleID] or app:name()
				_updateCanvas(appName, frame, hasSpaceChanged)
			end
		end
	else
		previousWindowId = nil
		previousFrame = nil
		previousSpaceId = nil
		if canvas then
			canvas:hide()
		end
	end
end

-- Toggle the highlight
function obj:toggle()
	if isEnabled then
		if timer then
			timer:stop()
		end
		if canvas then
			canvas:hide()
		end
		previousFrame = nil
		previousSpaceId = nil
		previousWindowId = nil
		isEnabled = false
	else
		if not timer then
			timer = hs.timer.doEvery(config.pollInterval, _pollActiveWindow)
		else
			timer:start()
		end
		isEnabled = true
	end
end

-- Bind a hotkey to toggle the highlight
function obj:bindHotkey(modifiers, key)
	hs.hotkey.bind(modifiers, key, function()
		self:toggle()
	end)
end

-- Start the highlight with custom configuration
function obj:start(customConfig, customAppNames)
	config = setmetatable(customConfig or {}, { __index = defaultConfig })
	appNames = customAppNames or {}
end

return obj
