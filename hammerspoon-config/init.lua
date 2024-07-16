-- HammerSpoon script entry point

local terminalID = "com.github.wez.wezterm" -- 'dev.warp.Warp-Stable'
local editorID = "com.microsoft.VSCode"
local aigptID = "co.podzim.BoltGPT"
local browserID = "company.thebrowser.Browser"
local mailID = "com.microsoft.Outlook"
local notesID = "md.obsidian"

local Lib = require("Lib")

-- pre-installed manually
Lib.loader:loadSpoons({
	"Console",
	"ReloadConfiguration",
	"EmmyLua", --vscode autocomplete
	"CircleClock",
	"Calendar",
	"FocusOverlay",
	"Launcher",
	"Layout",
	"Modal",
	"Windows",
	"Alert",
})

-- spoons
local Modal = spoon.Modal
local Launcher = spoon.Launcher
local Layout = spoon.Layout
local Windows = spoon.Windows
local FocusOverlay = spoon.FocusOverlay
local ReloadConfiguration = spoon.ReloadConfiguration
local Alert = spoon.Alert

-- partials that support self colon syntax
local partial = Lib.partial
local launchOrFocus = partial(Launcher.launchOrFocus, Launcher)
local layoutAction = partial(Layout.layoutAction, Layout)
local winAction = partial(Windows.action, Windows)
local toggleOverlay = hs.fnutils.partial(FocusOverlay.toggle, FocusOverlay)

-- console management
ReloadConfiguration:start()
Modal:action({ {}, "h" }, hs.toggleConsole)

--
-- register actions.
--

-- command keys
--   a: AI - BoltAI
--   b: Browser - Arc
--   c: Code - VSCode
--   m: Mail - Outlook
--   n: Notes - Obsidian
--   t: Terminal - Warp

-- launchOrFocus
Modal:action({ {}, "a" }, launchOrFocus(aigptID), { group = "favorites" })
Modal:action({ {}, "b" }, launchOrFocus(browserID), { group = "favorites" })
Modal:action({ {}, "c" }, launchOrFocus(editorID), { group = "favorites" })
Modal:action({ {}, "m" }, launchOrFocus(mailID))
Modal:action({ {}, "n" }, launchOrFocus(notesID))
Modal:action({ {}, "t" }, launchOrFocus(terminalID), { group = "favorites" })
Modal:action({ {}, "tab" }, nil, { group = "favorites", type = "next", loop = true })
Modal:action({ { "shift" }, "tab" }, nil, { group = "favorites", type = "prev", loop = true })

-- window management
Windows:start({ x = 8, y = 3 })
Modal:action({ { "option" }, "up" }, winAction("move up"), { msg = "move" })
Modal:action({ { "option" }, "down" }, winAction("move down"), { msg = "move" })
Modal:action({ { "option" }, "left" }, winAction("move left"), { msg = "move" })
Modal:action({ { "option" }, "right" }, winAction("move right"), { msg = "move" })
Modal:action({ {}, "up" }, winAction("resize up"), { msg = "resize" })
Modal:action({ {}, "down" }, winAction("resize down"), { msg = "resize" })
Modal:action({ {}, "left" }, winAction("resize left"), { msg = "resize" })
Modal:action({ {}, "right" }, winAction("resize right"), { msg = "resize" })
Modal:action({ { "cmd" }, "up" }, winAction("max"), { msg = "maximize" })
Modal:action({ { "cmd" }, "down" }, winAction("center"), { msg = "center" })
Modal:action({ { "cmd" }, "left" }, winAction("leftHalf"), { msg = "left half" })
Modal:action({ { "cmd" }, "right" }, winAction("rightHalf"), { msg = "right half" })

-- layouts
local editorLayouts = {
	{ { bundleID = editorID, rect = { 0, 0, 1, 1 } }, { bundleID = terminalID, rect = { 0, 0.5, 1, 0.5 } } },
	{ { bundleID = editorID, rect = { 0, 0, 1, 2 / 3 } }, { bundleID = terminalID, rect = { 0, 2 / 3, 1, 1 / 3 } } },
	{ { bundleID = editorID, rect = { 0, 0, 1, 0.5 } }, { bundleID = terminalID, rect = { 0, 0, 1, 1 } } },
}
Layout:registerGroup("editor", editorLayouts, {})
Modal:action({ {}, "e" }, layoutAction("editor", "forward"), { msg = "Editor / Terminal" })

-- overlay on focused app
Modal:registerOverlay(toggleOverlay) -- link overlay to modal
FocusOverlay:start({
	fontName = "Marker Felt",
	fontSize = 140,
	backgroundColor = { hue = 240 / 360, saturation = 0, brightness = 0, alpha = 0 },
	textColor = { hue = 240 / 360, saturation = 0.8, brightness = 0.8, alpha = 1 },
	borderColor = { hue = 240 / 360, saturation = 0.8, brightness = 0.4, alpha = 1 },
	borderWidth = 0,
	pollInterval = 0.1,
}, {
	[aigptID] = "AI-GPT",
	[browserID] = "Browser",
	[editorID] = "Code",
	[mailID] = "Mail",
	[notesID] = "Notes",
	[terminalID] = "Terminal",
})

Modal:registerAlert(Alert)
Alert:start({
	padding = 30,
	borderRadius = 15,
	fontSize = 28,
	textColor = { hue = 120 / 360, saturation = 1, brightness = 0.9, alpha = 1 },
	backgroundColor = { hue = 120 / 360, saturation = 0.6, brightness = 0.11, alpha = 1 },
	borderColor = { hue = 120 / 360, saturation = 1, brightness = 0.6, alpha = 1 },
	fadeInDuration = 0.5,
	fadeOutDuration = 0.5,
	motionDuration = 0.1,
	placementPercentage = 50,
	marginPercentage = 2,
	minWidth = 250,
	sliderLocation = "bottom",
})

-- capslock key remapped to f20 using Karabiner Elements
Modal:bindHotkeys({ toggle = { {}, "f20" } })
