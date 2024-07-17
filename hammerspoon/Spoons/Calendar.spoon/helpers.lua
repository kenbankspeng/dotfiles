return function(canvas)
	local obj = {}

	function obj.daysInMonth(year, month)
		-- Adjust to the first day of the given month
		local givenMonthDate = {
			year = year,
			month = month,
			day = 1,
		}

		-- Calculate the first day of the next month
		local nextMonthDate = {
			year = givenMonthDate.year,
			month = givenMonthDate.month + 1,
			day = 1,
		}

		-- Handle year change
		if nextMonthDate.month > 12 then
			nextMonthDate.month = 1
			nextMonthDate.year = nextMonthDate.year + 1
		end

		-- Convert dates to timestamps
		local givenMonthTimestamp = os.time(givenMonthDate)
		local nextMonthTimestamp = os.time(nextMonthDate)

		-- Calculate the number of days in the given month
		local daysInGivenMonth = (os.difftime(nextMonthTimestamp, givenMonthTimestamp) / (24 * 3600))

		return math.floor(daysInGivenMonth + 0.5) -- closest integer
	end

	function obj.canvasEl(id)
		for index, element in pairs(canvas) do
			if element.id == id then
				return element
			end
		end
		return {}
	end

	function obj.canvasIndex(id)
		for index, element in pairs(canvas) do
			if element.id == id then
				return index
			end
		end
		return 0
	end

	function obj.calculateDateToday()
		return os.date("*t")
	end

	obj.monthAbbr = { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec" }

	function obj.calculateMonthYear(displayDate)
		return obj.monthAbbr[displayDate.month] .. " " .. displayDate.year
	end

	function obj.calculateDowForFirstDom(displayDate)
		return os.date("*t", os.time({ year = displayDate.year, month = displayDate.month, day = 1 })).wday
	end

	obj.weeknames = { "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" }

	function obj.place(x, y, relativeCoordinates)
		local absoluteCoordinates = {}
		for _, point in ipairs(relativeCoordinates) do
			table.insert(absoluteCoordinates, { x = x + point.x, y = y + point.y })
		end
		return absoluteCoordinates
	end

	function obj.scale(w, h, relativeCoordinates)
		local scaledCoordinates = {}
		for _, point in ipairs(relativeCoordinates) do
			table.insert(scaledCoordinates, { x = point.x * w, y = point.y * h })
		end
		return scaledCoordinates
	end

	return obj
end
