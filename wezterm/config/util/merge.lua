local function meta__index(tbl)
  tbl.__index = tbl
  return setmetatable(tbl, tbl)
end

local function merge(dest, src)
  for k, v in pairs(src) do
    if type(v) == 'table' and type(dest[k]) == 'table' then
      merge(dest[k], v)
    else
      dest[k] = v
    end
  end
  return dest
end

local obj = {
  merge = merge,
  meta__index = meta__index
}
obj.__index = obj
return obj
