-- 1000
-- { "leaf", 1000 }
-- next:  1000 split:  vertical
-- 1000 N
-- { "row", { { "leaf", 1000 }, { "leaf", 1007 } } }
-- next:  1000 split:  horizontal
-- 1000 1007
-- N
-- { "row", { { "col", { { "leaf", 1000 }, { "leaf", 1013 } } }, { "leaf", 1007 } } }
-- next:  1007 split:  horizontal
-- 1000 1007
-- 1013
-- { "row", { { "col", { { "leaf", 1000 }, { "leaf", 1013 } } }, { "col", { { "leaf", 1007 }, { "leaf", 1016 } } } } }
-- next:  1000 split:  vertical
-- 1000 1007
-- 1013 1016
-- { "row", { { "col", { { "row", { { "leaf", 1000 }, { "leaf", 1019 } } }, { "leaf", 1013 } } }, { "col", { { "leaf", 1007 }, { "leaf", 1016 } } } } }
-- next:  1007 split:  vertical

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
    local sizes = {}
    for _, sublayout in ipairs(layout[2]) do
      table.insert(sizes, { sublayout, get_layout_size(sublayout) })
    end
    table.sort(sizes, function(a, b) return a[2] < b[2] end)
    for i, entry in ipairs(sizes) do
      local id, dir = find_next_split(entry[1], depth + 1)
      if type(id) == "number" then
        return id, dir
      end
    end
    return sizes[1][1][2], layout[1] == "row" and "horizontal" or "vertical"
  end
end

local function next_split()
  local layout = vim.fn.winlayout()
  if #layout == 0 then
    return nil, nil
  elseif #layout == 2 and layout[1] == "leaf" then
    return layout[2], "vertical"
  else
    local id, dir = find_next_split(layout, 0)
    while type(id) == "table" do
      id, dir = find_next_split(id, 0)
    end
    return id, dir
  end
end

return function()
  local id, dir = next_split()

  print('----')
  print(vim.inspect(vim.fn.winlayout()))
  print('next: ', id, 'split: ', dir)

  if id then vim.api.nvim_set_current_win(id) end
  return require('oil').select({
    vertical = dir == "vertical",
    horizontal = dir == "horizontal",
    close = true,
  })
end
