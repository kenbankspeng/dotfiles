-- -- {}
-- -- select
-- local a0 = {}

-- -- 1
-- local a1 = { "leaf", 1000 }
-- -- next: wid:1000, split: vertical

-- -- 1 N
-- local a2 = { "row", { { "leaf", 1000 }, { "leaf", 1007 } } }
-- -- next: wid: 1007, split: horizontal

-- -- 1 2
-- -- N
-- local a3 = { "row", { { "col", { { "leaf", 1000 }, { "leaf", 1013 } } }, { "leaf", 1007 } } }
-- -- next: wid: 1007, split: horizontal

-- -- 1 2
-- -- 3 N
-- local a4 = { "row", { { "col", { { "leaf", 1000 }, { "leaf", 1013 } } }, { "col", { { "leaf", 1007 }, { "leaf", 1021 } } } } }
-- -- next: 1007, split: vertical

-- -- 1 2 N
-- -- 3 4
-- local a5 = { "row", { { "col", { { "leaf", 1000 }, { "leaf", 1013 } } }, { "col", { { "row", { { "leaf", 1007 }, { "leaf", 1024 } } }, { "leaf", 1021 } } } } }
-- -- next: 1024, split: horizontal

-- -- 1 2 5
-- -- 3 4 6
-- local a6 = { "row", { { "col", { { "leaf", 1000 }, { "leaf", 1013 } } }, { "col", { { "row", { { "leaf", 1007 }, { "leaf", 1024 } } }, { "row", { { "leaf", 1021 }, { "leaf", 1030 } } } } } } }
local function get_layout_size(layout)
  if layout[1] == "leaf" then
    return 1
  elseif layout[1] == "row" or layout[1] == "col" then
    local size = 0
    for _, sublayout in ipairs(layout[2]) do
      size = size + get_layout_size(sublayout)
    end
    return size
  end
end

local function find_next_split(layout)
  if layout[1] == "leaf" then
    return { layout[2], "vertical" }
  elseif layout[1] == "row" then
    for _, sublayout in ipairs(layout[2]) do
      if get_layout_size(sublayout) % 2 == 1 then
        return find_next_split(sublayout)
      end
    end
    return { layout[2][#layout[2]][2], "horizontal" }
  elseif layout[1] == "col" then
    for _, sublayout in ipairs(layout[2]) do
      if get_layout_size(sublayout) % 2 == 1 then
        return find_next_split(sublayout)
      end
    end
    return { layout[2][#layout[2]][2], "vertical" }
  end
end

local function next_split()
  local layout = vim.fn.winlayout()
  if #layout == 0 then
    return { nil, "vertical" }
  elseif #layout == 2 and layout[1] == "leaf" then
    return { layout[2], "vertical" }
  else
    return find_next_split(layout)
  end
end

return function()
  local next = next_split()
  if next then
    print(vim.inspect(vim.fn.winlayout()))
    print('next: ', next[1], 'split: ', next[2])
  end
  return require('oil').select()
end
