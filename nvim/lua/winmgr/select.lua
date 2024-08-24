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

local singleton = false
return function()
  if not singleton then
    singleton = true
    return require('oil').select()
  end

  local winid = vim.api.nvim_get_current_win()
  local id, dir = next_split()
  if id then
    vim.api.nvim_set_current_win(id)
    if dir == "vertical" then
      vim.cmd('vsplit')
    elseif dir == "horizontal" then
      vim.cmd('split')
    end
    vim.api.nvim_set_current_win(winid)
  end
  return require('oil').select()
end
