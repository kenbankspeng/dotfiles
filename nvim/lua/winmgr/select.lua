local function select()
  print("select")
  return require('oil').select()
end

return {
  select = select,
}
