-- Function to recursively find the best leaf to split and its parent type
local function find_split(layout)
  if layout[1] == "leaf" then
    return layout[2]
  end

  for _, sub_layout in ipairs(layout[2]) do
    local leaf = find_split(sub_layout)
    if leaf then
      return leaf
    end
  end
end

-- Function to determine the split type based on the parent layout
local function determine_split_type(layout)
  if layout[1] == "row" then
    return "vertical"
  elseif layout[1] == "col" then
    return "horizontal"
  end
  return "horizontal"
end

-- Function to determine the next split
local function determine_next_split()
  local layout = vim.fn.winlayout()
  local best_leaf = find_split(layout)
  local split_type = determine_split_type(layout)

  print(vim.inspect(layout))
  return { leaf = best_leaf, split = split_type }
end

return function()
  local result = determine_next_split()
  print("best leaf: " .. result.leaf .. " split: " .. result.split)
  return require('oil').select()
end
