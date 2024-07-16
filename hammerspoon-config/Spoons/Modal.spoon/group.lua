local obj = {}
local groups = {}

function obj.addAction(groupId, action)
	if not groups[groupId] then
		groups[groupId] = { actions = {}, index = 1, atEnd = false, atStart = true }
	end
	table.insert(groups[groupId].actions, action)
end

function obj.handleNext(groupId, loop)
	local group = groups[groupId]
	if group then
		if loop then
			group.index = (group.index % #group.actions) + 1
			group.atEnd = false
			group.atStart = false
		else
			if group.index < #group.actions then
				group.index = group.index + 1
				group.atEnd = false
				group.atStart = false
			elseif not group.atEnd then
				group.atEnd = true
				return group.actions[group.index][1], group.actions[group.index][2]
			else
				return nil, nil
			end
		end
		return group.actions[group.index][1], group.actions[group.index][2]
	end
	return nil, nil
end

function obj.handlePrev(groupId, loop)
	local group = groups[groupId]
	if group then
		if loop then
			group.index = (group.index - 2 + #group.actions) % #group.actions + 1
			group.atEnd = false
			group.atStart = false
		else
			if group.index > 1 then
				group.index = group.index - 1
				group.atEnd = false
				group.atStart = false
			elseif not group.atStart then
				group.atStart = true
				return group.actions[group.index][1], group.actions[group.index][2]
			else
				return nil, nil
			end
		end
		return group.actions[group.index][1], group.actions[group.index][2]
	end
	return nil, nil
end

return obj
