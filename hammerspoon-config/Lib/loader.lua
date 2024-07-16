local obj = {}

function obj:addSpoonDir(dirName)
	package.path = package.path .. ";" .. hs.configdir .. "/" .. dirName .. "/?.spoon/init.lua"
end

function obj:loadSpoons(spoons)
	for _, spoonName in ipairs(spoons) do
		hs.loadSpoon(spoonName)
	end
end

function obj:installSpoons(specs)
	if not spoon.SpoonInstall then
		return
	end -- guard

	for _, spec in ipairs(specs) do
		spoon.SpoonInstall:andUse(spec.name, spec.detail)
	end
end

return obj
