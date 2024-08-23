-- Function to determine the split type based on the current layout
local function determine_split_type(layout)
  if layout[1] == "col" then
    return "horizontal"
  elseif layout[1] == "row" then
    return "vertical"
  end
  return "horizontal"
end

-- Function to find the best leaf to split
local function find_best_leaf(layout)
  if layout[1] == "leaf" then
    return layout
  end

  local best_leaf = nil
  for _, sub_layout in ipairs(layout[2]) do
    if sub_layout[1] == "leaf" then
      best_leaf = sub_layout
      break
    else
      best_leaf = find_best_leaf(sub_layout)
    end
  end

  return best_leaf
end

-- Function to determine the next split
local function determine_next_split()
  local layout = vim.fn.winlayout()
  local best_leaf = find_best_leaf(layout)
  local split_type = determine_split_type(layout)
  print(vim.inspect(layout))
  return { leaf = best_leaf[2], split = split_type }
end


return function()
  local result = determine_next_split()
  print("best leaf: " .. result.leaf .. " split: " .. result.split)
  return require('oil').select()
end
