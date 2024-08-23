-- Function to calculate the depth of the layout
local function calculate_depth(layout)
  if layout[1] == "leaf" then
    return 1
  elseif layout[1] == "row" or layout[1] == "col" then
    local max_depth = 0
    for _, sub_layout in ipairs(layout[2]) do
      local depth = calculate_depth(sub_layout)
      if depth > max_depth then
        max_depth = depth
      end
    end
    return max_depth + 1
  end
end

-- Function to find the most balanced split
local function find_balanced_split(layout)
  if layout[1] == "leaf" then
    return { leaf = layout[2], split = "horizontal" }
  elseif layout[1] == "row" then
    local min_depth = math.huge
    local best_leaf = nil
    for _, sub_layout in ipairs(layout[2]) do
      local depth = calculate_depth(sub_layout)
      if depth < min_depth then
        min_depth = depth
        best_leaf = sub_layout
      end
    end
    local result = find_balanced_split(best_leaf)
    result.split = "vertical"
    return result
  elseif layout[1] == "col" then
    local min_depth = math.huge
    local best_leaf = nil
    for _, sub_layout in ipairs(layout[2]) do
      local depth = calculate_depth(sub_layout)
      if depth < min_depth then
        min_depth = depth
        best_leaf = sub_layout
      end
    end
    local result = find_balanced_split(best_leaf)
    result.split = "horizontal"
    return result
  end
end

-- Function to determine the next split
local function determine_next_split()
  local layout = vim.fn.winlayout()
  return find_balanced_split(layout)
end

return function()
  local next_split_info = determine_next_split()
  print("Next split leaf: " .. next_split_info.leaf .. " with a " .. next_split_info.split .. " split.")
  -- print(vim.inspect(vim.fn.winlayout()))
  return require('oil').select()
end
