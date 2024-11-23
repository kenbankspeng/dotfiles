return function(param)
	local obj = {}

	obj.timer = nil
	obj.displayDate = os.date("*t")
	obj.screen = hs.screen.mainScreen():fullFrame()

	obj.canvas = hs.canvas.new({
		x = param.canvas.margin.left,
		y = obj.screen.h - param.canvas.height - param.canvas.margin.bottom,
		w = param.canvas.width,
		h = param.canvas.height,
	}) or {}

	local dayWidth = param.midline.width
	local day1x = param.midline.x

	obj.helpers = dofile(hs.spoons.resourcePath("helpers.lua"))(obj.canvas)
	local canvasIndex = obj.helpers.canvasIndex
	local canvasEl = obj.helpers.canvasEl
	local place = obj.helpers.place
	local scale = obj.helpers.scale
	local daysInMonth = obj.helpers.daysInMonth
	local calculateDateToday = obj.helpers.calculateDateToday
	local calculateMonthYear = obj.helpers.calculateMonthYear
	local calculateDowForFirstDom = obj.helpers.calculateDowForFirstDom
	local weeknames = obj.helpers.weeknames

	function obj:updateCanvas()
		local givenYear = self.displayDate.year
		local givenMonth = self.displayDate.month
		local givenDay = self.displayDate.day

		local dateToday = calculateDateToday()
		local showTodayIndicator = givenYear == dateToday.year
			and givenMonth == dateToday.month
			and givenDay == dateToday.day

		local daysInGivenMonth = daysInMonth(givenYear, givenMonth)

		-- element index -1 within canvas
		local dow = canvasIndex("dow1") - 1
		local midline = canvasIndex("midline1") - 1
		local dom = canvasIndex("dom1") - 1

		canvasEl("title").text = calculateMonthYear(obj.displayDate)

		if showTodayIndicator then
			canvasEl("todayIndicator").action = "strokeAndFill"
		else
			canvasEl("todayIndicator").action = "skip"
		end

		for i = 1, 31 do
			local dowEl = self.canvas[dow + i]
			local midlineEl = self.canvas[midline + i]
			local domEl = self.canvas[dom + i]

			if i <= daysInGivenMonth then
				-- Calculate day of week for the current day: + 1 to ensure result is 1 to 7
				-- at i = 1, dow + 1 - 2 % 7 + 1 is same dow repeating every 7 days
				dowEl.text = weeknames[(calculateDowForFirstDom(self.displayDate) + i - 2) % 7 + 1]
				dowEl.textColor = param.dow.textColor
				dowEl.textSize = param.dow.textSize

				midlineEl.fillColor = param.midline.fillColor

				domEl.text = i
				domEl.textColor = param.dom.textColor
				domEl.textSize = param.dom.textSize

				if dowEl.text == "Sa" or dowEl.text == "Su" then
					dowEl.textColor = param.dow.weekend
					midlineEl.fillColor = param.midline.weekend
					domEl.textColor = param.dom.weekend
				end

				if showTodayIndicator and i == givenDay then
					dowEl.textColor = param.todayIndicator.textColor
					dowEl.textSize = param.todayIndicator.textSize
					if param.todayIndicator.midlineFillColor then
						midlineEl.fillColor = param.todayIndicator.midlineFillColor
					end
					domEl.textColor = param.todayIndicator.textColor
					domEl.textSize = param.todayIndicator.textSize

					canvasEl("todayIndicator").frame.x = day1x
						+ (i - 1) * dayWidth
						+ (dayWidth - param.todayIndicator.width) / 2
				end
			else
				dowEl.textColor.alpha = 0
				midlineEl.fillColor.alpha = 0
				domEl.textColor.alpha = 0
			end
		end
	end

	function obj:createCanvas()
		self.canvas:behavior(hs.canvas.windowBehaviors.canJoinAllSpaces)
		self.canvas:level(hs.canvas.windowLevels.normal - 1)

		-- canvas base
		self.canvas:appendElements({
			id = "background",
			type = "rectangle",
			action = "fill",
			fillColor = param.canvas.fillColor,
			roundedRectRadii = { xRadius = param.canvas.radius, yRadius = param.canvas.radius },
		})

		-- selected month
		self.canvas:appendElements({
			id = "title",
			type = "text",
			text = "",
			textSize = param.selector.title.textSize,
			textColor = param.selector.title.textColor,
			textAlignment = "right",
			frame = {
				x = param.selector.title.x,
				y = param.selector.title.y,
				w = param.selector.title.width,
				h = param.selector.title.height,
			},
		})

		-- left button for prev month
		local rightTriangle = { { x = 0.28, y = 0.25 }, { x = 0.28, y = 0.75 }, { x = 0.78, y = 0.50 } }
		local leftTriangle = { { x = 0.72, y = 0.25 }, { x = 0.72, y = 0.75 }, { x = 0.22, y = 0.50 } }
		self.canvas:appendElements({
			id = "prevMonth",
			type = "rectangle",
			action = "stroke",
			strokeColor = param.selector.button.strokeColor,
			strokeWidth = param.selector.button.strokeWidth,
			frame = {
				x = param.selector.button.prev.x,
				y = param.selector.button.prev.y,
				w = param.selector.button.width,
				h = param.selector.button.height,
			},
			trackMouseDown = true,
		}, {
			type = "segments",
			action = "strokeAndFill",
			fillColor = param.selector.button.fillColor,
			strokeColor = param.selector.button.strokeColor,
			strokeWidth = param.selector.button.strokeWidth,
			coordinates = place(
				param.selector.button.prev.x,
				param.selector.button.prev.y,
				scale(param.selector.button.width, param.selector.button.height, leftTriangle)
			),
		})

		-- right button for next month
		self.canvas:appendElements({
			id = "nextMonth",
			type = "rectangle",
			action = "stroke",
			strokeColor = param.selector.button.strokeColor,
			strokeWidth = param.selector.button.strokeWidth,
			frame = {
				x = param.selector.button.next.x,
				y = param.selector.button.next.y,
				w = param.selector.button.width,
				h = param.selector.button.height,
			},
			trackMouseDown = true,
		}, {
			type = "segments",
			action = "strokeAndFill",
			fillColor = param.selector.button.fillColor,
			strokeColor = param.selector.button.strokeColor,
			strokeWidth = param.selector.button.strokeWidth,
			coordinates = place(
				param.selector.button.next.x,
				param.selector.button.next.y,
				scale(param.selector.button.width, param.selector.button.height, rightTriangle)
			),
		})

		local strokeWidth = param.todayIndicator.strokeWidth
		-- today rectangle
		self.canvas:appendElements({
			id = "todayIndicator",
			type = "rectangle",
			action = "strokeAndFill",
			fillColor = param.todayIndicator.fillColor,
			strokeColor = strokeWidth and param.todayIndicator.strokeColor,
			strokeWidth = strokeWidth,
			roundedRectRadii = { xRadius = param.todayIndicator.radius, yRadius = param.todayIndicator.radius },
			frame = {
				x = 0, -- will be moved at runtime
				y = param.todayIndicator.y,
				w = param.todayIndicator.width,
				h = param.todayIndicator.height,
			},
		})

		--
		-- dow: day of week
		--
		for i = 1, 31 do
			self.canvas:appendElements({
				id = "dow" .. i,
				type = "text",
				text = "",
				textFont = "Courier-Bold",
				textSize = param.dow.textSize,
				textAlignment = "center",
				frame = {
					x = param.dow.x + dayWidth * (i - 1),
					y = param.dow.y,
					w = dayWidth,
					h = param.dow.height,
				},
			})
		end

		--
		-- midline
		--
		for i = 1, 31 do
			self.canvas:appendElements({
				id = "midline" .. i,
				type = "rectangle",
				action = "fill",
				fillColor = param.midline.fillColor,
				frame = {
					x = param.midline.x + dayWidth * (i - 1),
					y = param.midline.y,
					w = dayWidth,
					h = param.midline.height,
				},
			})
		end

		--
		-- dom: day of month
		--
		for i = 1, 31 do
			self.canvas:appendElements({
				id = "dom" .. i,
				type = "text",
				text = "",
				textFont = "Courier-Bold",
				textSize = param.dom.textSize,
				textAlignment = "center",
				frame = {
					x = param.dom.x + dayWidth * (i - 1),
					y = param.dom.y,
					w = dayWidth,
					h = param.dom.height,
				},
			})
		end

		-- button clicks
		self.canvas:mouseCallback(function(canvas, event, id, x, y)
			if event == "mouseDown" then
				if id == "nextMonth" then
					self:nextMonth()
				end
				if id == "prevMonth" then
					self:prevMonth()
				end
			end
		end)
	end

	function obj:showCalendar()
		if self.canvas then
			self.canvas:show()
		end
	end

	function obj:hideCalendar()
		if self.canvas then
			self.canvas:hide()
		end
	end

	function obj:showToday()
		self.displayDate = os.date("*t")
		self:updateCanvas()
	end

	function obj:prevMonth()
		if self.displayDate.month == 1 then
			self.displayDate.year = self.displayDate.year - 1
			self.displayDate.month = 12
		else
			self.displayDate.month = self.displayDate.month - 1
		end
		self:updateCanvas()
	end

	function obj:nextMonth()
		if self.displayDate.month == 12 then
			self.displayDate.year = self.displayDate.year + 1
			self.displayDate.month = 1
		else
			self.displayDate.month = self.displayDate.month + 1
		end
		self:updateCanvas()
	end

	--- HCalendar:start()
	--- Method
	--- Start HCalendar timer and show the canvas
	function obj:start()
		if self.timer == nil then
			self.timer = hs.timer.doEvery(1800, function()
				self:hideCalendar()
				self:showToday()
				self:showCalendar()
			end)
			self.timer:setNextTrigger(0)
		else
			self.timer:start()
			self:showCalendar()
		end
	end

	--- HCalendar:stop()
	--- Method
	--- Stop HCalendar timer and hide the canvas
	function obj:stop()
		if self.timer then
			self.timer:stop()
		end
		self:hideCalendar()
	end

	--- HCalendar:init()
	--- Method
	--- Initializes the spoon
	function obj:init()
		self:createCanvas()
		self:start()
	end

	return obj
end
