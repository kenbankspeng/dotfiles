local obj = {}
obj.__index = obj

--
-- Metadata
--
obj.name = "Windows"
obj.version = "1.2"
obj.author = "kenbanks"
obj.homepage = ""
obj.license = "MIT - https://opensource.org/licenses/MIT"

local function _alignGrid(self, win)
	if not win then
		win = hs.window.focusedWindow()
	end
	if not win then
		return
	end

	local frame = win:frame()
	local screen = win:screen()
	local screenFrame = screen:frame()
	local screenFullFrame = screen:fullFrame()

	self.xStep = screenFrame.w / self.grid.x
	self.yStep = screenFrame.h / self.grid.y

	self.vMax = math.floor(screenFrame.h / self.yStep)
	self.hMax = math.floor(screenFrame.w / self.xStep)

	local delta = 10

	self.miniFrame = {
		x = math.floor((frame.x + delta - screenFullFrame.x) / self.xStep),
		y = math.floor((frame.y + delta - screenFullFrame.y) / self.yStep),
		w = math.floor((frame.w + delta) / self.xStep),
		h = math.floor((frame.h + delta) / self.yStep),
	}

	self.offsetX = screenFrame.x - screenFullFrame.x
	self.offsetY = screenFrame.y - screenFullFrame.y
end

local function _setFrame(self, win)
	local frame = win:frame()
	frame.x = self.miniFrame.x * self.xStep + self.offsetX
	frame.y = self.miniFrame.y * self.yStep + self.offsetY
	frame.w = self.miniFrame.w * self.xStep
	frame.h = self.miniFrame.h * self.yStep
	win:setFrame(frame)
end

local function _move(self, how)
	local bottomEdge = self.miniFrame.y + self.miniFrame.h
	local rightEdge = self.miniFrame.x + self.miniFrame.w

	if string.find(how, "up") and self.miniFrame.y > 0 then
		self.miniFrame.y = self.miniFrame.y - 1
	elseif string.find(how, "down") and bottomEdge < self.vMax then
		self.miniFrame.y = self.miniFrame.y + 1
	elseif string.find(how, "left") and self.miniFrame.x > 0 then
		self.miniFrame.x = self.miniFrame.x - 1
	elseif string.find(how, "right") and rightEdge < self.hMax then
		self.miniFrame.x = self.miniFrame.x + 1
	end
end

local function _resize(self, how)
	local bottomEdge = self.miniFrame.y + self.miniFrame.h
	local rightEdge = self.miniFrame.x + self.miniFrame.w

	if string.find(how, "up") and bottomEdge > 1 then
		self.miniFrame.h = self.miniFrame.h - 1
	elseif string.find(how, "down") and bottomEdge < self.vMax then
		self.miniFrame.h = self.miniFrame.h + 1
	elseif string.find(how, "left") and rightEdge > 1 then
		self.miniFrame.w = self.miniFrame.w - 1
	elseif string.find(how, "right") and rightEdge < self.hMax then
		self.miniFrame.w = self.miniFrame.w + 1
	end
end

local function _preset(self, how)
	if how == "leftHalf" then
		self.miniFrame.x = 0
		self.miniFrame.y = 0
		self.miniFrame.w = self.grid.x / 2
		self.miniFrame.h = self.grid.y
	elseif how == "rightHalf" then
		self.miniFrame.x = self.grid.x / 2
		self.miniFrame.y = 0
		self.miniFrame.w = self.grid.x / 2
		self.miniFrame.h = self.grid.y
	elseif how == "max" then
		self.miniFrame.x = 0
		self.miniFrame.y = 0
		self.miniFrame.w = self.grid.x
		self.miniFrame.h = self.grid.y
	elseif how == "center" then
		self.miniFrame.x = 0.1 * self.hMax
		self.miniFrame.y = 0.1 * self.vMax
		self.miniFrame.w = 0.8 * self.hMax
		self.miniFrame.h = 0.8 * self.vMax
	end
end

function obj:action(how)
	local win = hs.window.focusedWindow()
	_alignGrid(self, win)

	if string.find(how, "move") then
		_move(self, how)
	elseif string.find(how, "resize") then
		_resize(self, how)
	else
		_preset(self, how)
	end
	_setFrame(self, win)
end

function obj:start(grid)
	self.grid = grid

	-- Set up a window filter to detect focus changes
	local wf = hs.window.filter.default
	wf:subscribe(hs.window.filter.windowFocused, function()
		_alignGrid(self)
	end)
end

return obj
