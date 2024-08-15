local function meta__index(tbl)
  tbl.__index = tbl
  return setmetatable(tbl, tbl)
end

local function merge(original, update)
  for k, v in pairs(update) do
    if type(v) == 'table' and type(original[k]) == 'table' then
      merge(original[k], v)
    else
      original[k] = v
    end
  end
end

local obj = {
  merge = merge,
  meta__index = meta__index
}
obj.__index = obj
return obj
