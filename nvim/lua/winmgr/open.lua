local function open()
  return vim.cmd("Oil --float")
end

return {
  open = open
}
