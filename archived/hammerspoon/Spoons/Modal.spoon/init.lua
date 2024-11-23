local obj = {}
obj.__index = obj

-- Metadata
obj.name = "Modal"
obj.version = "1.0"
obj.author = "kenbanks"
obj.homepage = ""
obj.license = "MIT - https://opensource.org/licenses/MIT"

-- local requires
local group = dofile(hs.spoons.resourcePath("group.lua"))
local timer = dofile(hs.spoons.resourcePath("timer.lua"))

local modal = nil
local registeredKeys = {}
local isActive = false
local overlay = nil -- optional overlay extension
local alert = nil -- optional alert extension

local tap = hs.eventtap.new({ hs.eventtap.event.types.keyDown, hs.eventtap.event.types.keyUp }, function(event)
	return timer.handleEvent(event, registeredKeys, isActive)
end)

local function _registerKey(t, item)
	if not hs.fnutils.contains(t, item) then
		table.insert(t, item)
	end
end

local function _toggle()
	if type(overlay) == "function" then
		overlay()
	end
	if isActive then
		if modal then
			modal:exit()
		end
		tap:stop()
		isActive = false
		if alert then
			alert:clear()
		end
	else
		if modal then
			modal:enter()
		end
		tap:start()
		isActive = true
	end
end

function obj:action(hotkey, callback, options)
	if not modal then
		return
	end
	local mods = hotkey[1]
	local key = hotkey[2]
	_registerKey(registeredKeys, key)

	options = options or {}
	local msg = options.msg

	local groupId = options.group
	local actionType = options.type

	if groupId and not actionType then
		group.addAction(groupId, { callback, msg })
	end

	if options.interval then
		timer.addBinding(key, { options.interval, callback })
	end

	modal:bind(mods, key, function()
		-- callback wrapper entrypoint
		if actionType == "next" then
			local nextCallback, nextMsg = group.handleNext(groupId, options.loop)
			if nextCallback then
				nextCallback()
			end
			msg = nextMsg
		elseif actionType == "prev" then
			local prevCallback, prevMsg = group.handlePrev(groupId, options.loop)
			if prevCallback then
				prevCallback()
			end
			msg = prevMsg
		elseif callback then
			callback()
		end
		if alert and msg then
			alert:show(msg)
		end
	end)
end

-- AlertSpoon must support Alert:show(msg) and Alert:clear()
function obj:registerAlert(AlertSpoon)
	alert = AlertSpoon
end

function obj:registerOverlay(overlayToggle)
	overlay = overlayToggle
end

function obj:init()
	modal = hs.hotkey.modal.new()
end

function obj:bindHotkeys(mapping)
	if not mapping or not mapping.toggle then
		return
	end
	_registerKey(registeredKeys, mapping.toggle[2])
	local actions = { toggle = _toggle }
	hs.spoons.bindHotkeysToSpec(actions, mapping)
end

return obj
