--# selene: allow(unused_variable)
---@diagnostic disable: unused-local

-- A horizonal calendar inset into the desktop
--
-- Download: [https://github.com/Hammerspoon/Spoons/raw/master/Spoons/HCalendar.spoon.zip](https://github.com/Hammerspoon/Spoons/raw/master/Spoons/HCalendar.spoon.zip)
---@class spoon.HCalendar
local M = {}
spoon.HCalendar = M

-- Create the calendar canvas
function M:createCanvas() end

-- Initializes the spoon
function M:init() end

-- Control whether or not progress through the month is shown.
function M.showProgress (Boolean, ...) end

-- Start HCalendar timer and show the canvas
function M:start() end

-- Stop HCalendar timer and hide the canvas
function M:stop() end

