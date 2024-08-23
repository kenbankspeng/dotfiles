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

local function find_next_split(layout, depth)
  if layout[1] == "leaf" then
    return layout[2], depth % 2 == 0 and "vertical" or "horizontal"
  elseif layout[1] == "row" or layout[1] == "col" then
    for _, sublayout in ipairs(layout[2]) do
      if get_layout_size(sublayout) % 2 == 1 then
        local id, dir = find_next_split(sublayout, depth + 1)
        if type(id) == "number" then
          return id, dir
        end
      end
    end
    return layout[2][1][2], layout[1] == "row" and "horizontal" or "vertical"
  end
end

local function next_split()
  local layout = vim.fn.winlayout()
  if #layout == 0 then
    return nil, "vertical"
  elseif #layout == 2 and layout[1] == "leaf" then
    return layout[2], "vertical"
  else
    if get_layout_size(layout) % 2 == 1 then
      return find_next_split(layout, 0)
    else
      return layout[2][1][2], layout[1] == "row" and "horizontal" or "vertical"
    end
  end
end

return function()
  local id, dir = next_split()
  if id then
    print(vim.inspect(vim.fn.winlayout()))
    print('next: ', id, 'split: ', dir)
  end
  return require('oil').select()
end
