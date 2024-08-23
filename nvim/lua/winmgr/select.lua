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

-- Function to find the best leaf and its parent layout
local function find_best_leaf(layout, parent)
  if layout[1] == "leaf" then
    return layout, parent
  end

  local min_leaves = math.huge
  local best_leaf = nil
  local best_parent = nil

  for _, sub_layout in ipairs(layout[2]) do
    local _, leaves = calculate_depth_and_leaves(sub_layout)
    if leaves < min_leaves then
      min_leaves = leaves
      best_leaf, best_parent = find_best_leaf(sub_layout, layout)
    end
  end

  return best_leaf, best_parent
end

-- Function to determine the next split
local function determine_next_split()
  local layout = vim.fn.winlayout()
  local best_leaf, parent_layout = find_best_leaf(layout, nil)

  local split_type = "horizontal"
  if parent_layout and parent_layout[1] == "row" then
    split_type = "vertical"
  end

  return { leaf = best_leaf[2], split = split_type }
end

return function()
  local next_split_info = determine_next_split()
  print("Next split leaf: " .. next_split_info.leaf .. " with a " .. next_split_info.split .. " split.")
  -- print(vim.inspect(vim.fn.winlayout()))
  return require('oil').select()
end
