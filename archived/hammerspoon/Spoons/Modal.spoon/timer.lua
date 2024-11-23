local obj = {}
local activeTimers = {}
local bindings = {}

local function stopTimer(key)
	if activeTimers[key] then
		activeTimers[key]:stop()
		activeTimers[key] = nil
	end
end

function obj.handleEvent(event, registeredKeys, isActive)
	local keycode = event:getKeyCode()
	local eventType = event:getType()
	local key = hs.keycodes.map[keycode]

	-- If modal is active, process the event
	if isActive then
		-- Block unregistered keys
		if not hs.fnutils.contains(registeredKeys, key) then
			return true
		end

		local binding = bindings[key]
		local keyIsDown = eventType == hs.eventtap.event.types.keyDown
		local keyIsUp = eventType == hs.eventtap.event.types.keyUp

		if keyIsDown then
			if binding and not activeTimers[key] then
				local interval = binding[1]
				local callback = binding[2]
				activeTimers[key] = hs.timer.doEvery(interval, callback)
			end
		elseif keyIsUp then
			if binding then
				stopTimer(key)
			end
		end
	end

	-- when not in modal, all keys pass through
	-- registered keys also pass through for any further processing
	return false
end

function obj.addBinding(key, binding)
	bindings[key] = binding
end

return obj
