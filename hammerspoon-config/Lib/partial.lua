local obj = {}

-- to support colon syntax, partial returns a wrapped partial containing the object instance
-- so it can be called again to add more args before passing it to the final destination
function obj.partial(fn, instance)
	return function(...)
		return hs.fnutils.partial(fn, instance, ...)
	end
end

return obj
