-- local luarocks paths
local project_path = os.getenv('HOME') .. '/.config/wezterm'
local lua_modules = '/lua_modules/share/lua/5.4'
local path1 = '/?.lua'
local path2 = '/?/init.lua'
local cpath1 = '/?.so'

local function join_paths(root, branch, ...)
  local leaves = { ... }
  local paths = {}
  for _, leaf in ipairs(leaves) do
    table.insert(paths, root .. leaf)
    table.insert(paths, root .. branch .. leaf)
  end
  return table.concat(paths, ";")
end

package.path = join_paths(project_path, lua_modules, path1, path2)
package.cpath = project_path .. lua_modules .. cpath1
