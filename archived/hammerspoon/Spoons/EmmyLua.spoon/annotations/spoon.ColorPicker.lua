--# selene: allow(unused_variable)
---@diagnostic disable: unused-local

-- Show a color sample/picker
--
-- Clicking on any color will copy its name to the clipboard, cmd-click will copy its RGB code.
--
-- Download: [https://github.com/Hammerspoon/Spoons/raw/master/Spoons/ColorPicker.spoon.zip](https://github.com/Hammerspoon/Spoons/raw/master/Spoons/ColorPicker.spoon.zip)
---@class spoon.ColorPicker
local M = {}
spoon.ColorPicker = M

-- Binds hotkeys for ColorPicker
--
-- Parameters:
--  * mapping - A table containing hotkey objifier/key details for the following items:
--   * show - Show color picker menu
function M:bindHotkeys(mapping, ...) end

-- Logger object used within the Spoon. Can be accessed to set the default log level for the messages coming from the Spoon.
M.logger = nil

-- Title to show in the menubar if `show_in_menubar` is true. Defaults to `"\u{1F308}"`, which is the [Rainbow Emoji](http://emojipedia.org/rainbow/)
M.menubar_title = nil

-- If `true`, show an icon in the menubar to trigger the color picker
M.show_in_menubar = nil

-- Toggle display on the screen of a grid with all the colors in the given colortable
--
-- Parameters:
--  * tablename - name of the colortable to display
function M.toggleColorSamples(tablename, ...) end

