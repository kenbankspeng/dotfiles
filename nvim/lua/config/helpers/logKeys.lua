return function(mode, filepath)
  local keymaps = vim.api.nvim_get_keymap(mode)
  local file = io.open(filepath, "w")

  if file then
    local max_key_length = 0
    local max_command_length = 0

    -- First pass to determine the maximum lengths
    for _, keymap in ipairs(keymaps) do
      local key_length = #keymap.lhs
      local command_length = #(keymap.rhs or "No command")
      if key_length > max_key_length then
        max_key_length = key_length
      end
      if command_length > max_command_length then
        max_command_length = command_length
      end
    end

    -- Padding lengths
    local key_padding = max_key_length + 6
    local command_padding = max_command_length + 6

    -- Function to create a filler string of a given length
    local function create_filler(length)
      return string.rep("-", length)
    end

    -- Second pass to write formatted output
    for _, keymap in ipairs(keymaps) do
      local key = keymap.lhs
      local command = keymap.rhs or "No command"
      local description = keymap.desc or "No description"
      file:write(string.format(
        "-- %s %s %s %s %s ----\n",
        key,
        create_filler(key_padding - #key - 1),
        command,
        create_filler(command_padding - #command - 1),
        description
      ))
    end

    file:close()
  else
    print("Error: Unable to open file " .. filepath)
  end
end
