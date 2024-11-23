local obj = {}

-- custom Console toolbar (adds Clear button)
local toolbar = require("hs.webview.toolbar")
local console = require("hs.console")
local image = require("hs.image")

function obj:init()
	console.defaultToolbar = toolbar
		.new("CustomToolbar", {
			{
				id = "reload",
				label = "Reload config",
				image = image.imageFromName("NSSynchronize"),
				tooltip = "Reload configuration",
				fn = function()
					hs.reload()
				end,
			},
			{
				id = "clearLog",
				label = "Clear",
				image = image.imageFromName("NSTrashEmpty"),
				tooltip = "Clear Console",
				fn = function()
					console.clearConsole()
				end,
			},
		})
		:canCustomize(true)
		:autosaves(true)
	console.toolbar(console.defaultToolbar)
	console.darkMode(true)
	console.consoleFont({ font = "DroidSansM Nerd Font Mono", size = 18 })
	console.consolePrintColor({ hue = 0.57, saturation = 0.87, brightness = 0.89, alpha = 1.0 })
	-- ?? Result Color
	console.consoleResultColor({ hue = 0.2, saturation = 0.87, brightness = 0.88, alpha = 1.0 })
	console.clearConsole()
end

return obj
