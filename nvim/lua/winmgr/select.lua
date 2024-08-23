-- Function to calculate the depth and count of leaves in the layout
local function calculate_depth_and_leaves(layout)
  if layout[1] == "leaf" then
    return 1, 1
  elseif layout[1] == "row" or layout[1] == "col" then
    local max_depth = 0
    local total_leaves = 0
    for _, sub_layout in ipairs(layout[2]) do
      local depth, leaves = calculate_depth_and_leaves(sub_layout)
      if depth > max_depth then
        max_depth = depth
      end
      total_leaves = total_leaves + leaves
    end
    return max_depth + 1, total_leaves
  end
end

-- Function to find the most balanced split
local function find_balanced_split(layout)
  if layout[1] == "leaf" then
    return { leaf = layout[2], split = "horizontal" }
  end

  local min_leaves = math.huge
  local best_leaf = nil
  local split_type = layout[1] == "row" and "vertical" or "horizontal"

  for _, sub_layout in ipairs(layout[2]) do
    local _, leaves = calculate_depth_and_leaves(sub_layout)
    if leaves < min_leaves then
      min_leaves = leaves
      best_leaf = sub_layout
    end
  end

  local result = find_balanced_split(best_leaf)
  result.split = split_type
  return result
end

-- Function to determine the next split
local function determine_next_split(layout)
  if layout[1] == "leaf" then
    return { leaf = layout[2], split = "horizontal" }
  elseif layout[1] == "row" then
    local col_leaves = 0
    for _, sub_layout in ipairs(layout[2]) do
      if sub_layout[1] == "col" then
        col_leaves = col_leaves + 1
      end
    end
    if col_leaves < #layout[2] then
      return { leaf = layout[2][1][2], split = "vertical" }
    else
      return find_balanced_split(layout)
    end
  elseif layout[1] == "col" then
    local row_leaves = 0
    for _, sub_layout in ipairs(layout[2]) do
      if sub_layout[1] == "row" then
        row_leaves = row_leaves + 1
      end
    end
    if row_leaves < #layout[2] then
      return { leaf = layout[2][1][2], split = "horizontal" }
    else
      return find_balanced_split(layout)
    end
  end
end

return function()
  local layout = vim.fn.winlayout()
  local next_split_info = determine_next_split(layout)
  print("Next split leaf: " .. next_split_info.leaf .. " with a " .. next_split_info.split .. " split.")
  -- print(vim.inspect(vim.fn.winlayout()))
  return require('oil').select()
end
