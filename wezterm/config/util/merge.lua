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

return merge
