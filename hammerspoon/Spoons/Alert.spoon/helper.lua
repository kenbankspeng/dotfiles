local obj = {}

-- Merge user options with defaults
function obj.getConfig(overrides, defaultConfig)
	return setmetatable(overrides or {}, { __index = defaultConfig })
end

-- Create a canvas element for the alert
function obj.createCanvasElement(options, boxWidth, boxHeight, boxX, boxY)
	local newCanvas = hs.canvas.new({ x = boxX, y = boxY, w = boxWidth, h = boxHeight })
	assert(newCanvas, "Failed to create canvas")

	local backgroundElement = {
		type = "rectangle",
		action = "fill",
		fillColor = options.backgroundColor,
		roundedRectRadii = { xRadius = options.borderRadius, yRadius = options.borderRadius },
	}

	local borderElement = {
		type = "rectangle",
		action = "stroke",
		strokeColor = options.borderColor,
		strokeWidth = 2,
		roundedRectRadii = { xRadius = options.borderRadius, yRadius = options.borderRadius },
	}

	if options.gradient then
		backgroundElement.fillGradient = "linear"
		backgroundElement.fillGradientColors = options.gradient
		backgroundElement.fillGradientAngle = 0
	end

	newCanvas:appendElements(backgroundElement, borderElement, {
		type = "text",
		text = "",
		textColor = options.textColor,
		frame = {
			x = options.padding,
			y = options.padding,
			w = boxWidth - 2 * options.padding,
			h = boxHeight - 2 * options.padding,
		},
	})

	return newCanvas
end

-- Find the index of the text element in the canvas
function obj.findTextElementIndex(canvas)
	for i, element in ipairs(canvas) do
		if element.type == "text" then
			return i
		end
	end
	return nil
end

-- Update the text in the canvas
function obj.updateCanvasText(canvas, text, options)
	assert(canvas, "Canvas not initialized")

	local styledText = hs.styledtext.new(text, {
		font = { name = "Helvetica", size = options.fontSize },
		color = options.textColor,
		paragraphStyle = { alignment = "center" },
	})

	local textSize = hs.drawing.getTextDrawingSize(styledText) or { w = 50, h = 10 }
	local boxWidth = math.max(textSize.w + options.padding * 2, options.minWidth)
	local boxHeight = textSize.h + options.padding * 2

	local textElementIndex = obj.findTextElementIndex(canvas)
	assert(textElementIndex, "Text element not found in the canvas")

	canvas[textElementIndex].text = styledText
	canvas:frame({
		x = canvas:frame().x,
		y = canvas:frame().y,
		w = boxWidth,
		h = boxHeight,
	})
end

-- Animate canvas movement step-by-step
function obj.animateCanvasMovementStep(
	canvas,
	fromFrame,
	toFrame,
	dx,
	dy,
	stepDuration,
	currentStep,
	animationSteps,
	onComplete
)
	if currentStep < animationSteps then
		currentStep = currentStep + 1
		if canvas then
			canvas:frame({
				x = fromFrame.x + dx * currentStep,
				y = fromFrame.y + dy * currentStep,
				w = fromFrame.w,
				h = fromFrame.h,
			})
		end
		hs.timer.doAfter(stepDuration, function()
			obj.animateCanvasMovementStep(
				canvas,
				fromFrame,
				toFrame,
				dx,
				dy,
				stepDuration,
				currentStep,
				animationSteps,
				onComplete
			)
		end)
	else
		if onComplete then
			onComplete()
		end
	end
end

-- Animate the canvas movement
function obj.animateCanvasMovement(canvas, fromFrame, toFrame, duration, animationSteps, onComplete)
	local stepDuration = duration / animationSteps
	local dx = (toFrame.x - fromFrame.x) / animationSteps
	local dy = (toFrame.y - fromFrame.y) / animationSteps

	obj.animateCanvasMovementStep(canvas, fromFrame, toFrame, dx, dy, stepDuration, 0, animationSteps, onComplete)
end

-- Calculate the initial and final positions for the alert
function obj.calculateSlidePositions(options, screenFrame, boxWidth, boxHeight)
	local initialX, initialY, finalX, finalY
	local fraction = options.placementPercentage / 100
	if options.sliderLocation == "right" then
		initialX = screenFrame.w
		finalX = screenFrame.w - boxWidth
		initialY = (screenFrame.h * fraction) - (boxHeight / 2)
		finalY = initialY
	elseif options.sliderLocation == "left" then
		initialX = -boxWidth
		finalX = 0
		initialY = (screenFrame.h * fraction) - (boxHeight / 2)
		finalY = initialY
	elseif options.sliderLocation == "bottom" then
		initialY = screenFrame.h + boxHeight
		finalY = screenFrame.h - boxHeight
		initialX = (screenFrame.w * fraction) - (boxWidth / 2)
		finalX = initialX
	elseif options.sliderLocation == "top" then
		initialY = -boxHeight
		finalY = 0
		initialX = (screenFrame.w * fraction) - (boxWidth / 2)
		finalX = initialX
	else
		error("Invalid slide direction")
	end
	return initialX, initialY, finalX, finalY
end

return obj
