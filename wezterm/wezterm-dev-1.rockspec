package = "wezterm"
version = "dev-1"
source = {
   url = "git+https://github.com/kenbankspeng/dotfiles.git"
}
description = {
   homepage = "https://github.com/kenbankspeng/dotfiles",
   license = "*** please specify a license ***"
}
build = {
   type = "builtin",
   modules = {
      ["colors.custom"] = "colors/custom.lua",
      ["config.appearance"] = "config/appearance.lua",
      ["config.bindings"] = "config/bindings.lua",
      ["config.domains"] = "config/domains.lua",
      ["config.fonts"] = "config/fonts.lua",
      ["config.general"] = "config/general.lua",
      ["config.init"] = "config/init.lua",
      ["config.nvim"] = "config/nvim.lua",
      ["config.quick_select"] = "config/quick_select.lua",
      startup = "startup.lua",
      ["types.config.init"] = "types/config/init.lua",
      ["types.enum.copy-mode-assignment"] = "types/enum/copy-mode-assignment.lua",
      ["types.enum.key-assignment"] = "types/enum/key-assignment.lua",
      ["types.events.gui"] = "types/events/gui.lua",
      ["types.events.multiplexer"] = "types/events/multiplexer.lua",
      ["types.events.window"] = "types/events/window.lua",
      ["types.init"] = "types/init.lua",
      ["types.objects.color"] = "types/objects/color.lua",
      ["types.objects.exec-domain"] = "types/objects/exec-domain.lua",
      ["types.objects.local-process-info"] = "types/objects/local-process-info.lua",
      ["types.objects.mux-domain"] = "types/objects/mux-domain.lua",
      ["types.objects.mux-tab"] = "types/objects/mux-tab.lua",
      ["types.objects.mux-window"] = "types/objects/mux-window.lua",
      ["types.objects.pane"] = "types/objects/pane.lua",
      ["types.objects.pane-information"] = "types/objects/pane-information.lua",
      ["types.objects.spawn-command"] = "types/objects/spawn-command.lua",
      ["types.objects.ssh-domain"] = "types/objects/ssh-domain.lua",
      ["types.objects.tab-information"] = "types/objects/tab-information.lua",
      ["types.objects.time"] = "types/objects/time.lua",
      ["types.objects.tls-domain-client"] = "types/objects/tls-domain-client.lua",
      ["types.objects.tls-domain-server"] = "types/objects/tls-domain-server.lua",
      ["types.objects.window"] = "types/objects/window.lua",
      ["types.objects.wsl-domain"] = "types/objects/wsl-domain.lua",
      ["types.wezterm.color.init"] = "types/wezterm/color/init.lua",
      ["types.wezterm.gui.init"] = "types/wezterm/gui/init.lua",
      ["types.wezterm.init"] = "types/wezterm/init.lua",
      ["types.wezterm.mux.init"] = "types/wezterm/mux/init.lua",
      ["types.wezterm.nerdfonts"] = "types/wezterm/nerdfonts.lua",
      ["types.wezterm.procinfo.init"] = "types/wezterm/procinfo/init.lua",
      ["types.wezterm.time.init"] = "types/wezterm/time/init.lua",
      ["util.gpu_adapter"] = "util/gpu_adapter.lua",
      ["util.init"] = "util/init.lua",
      ["util.math"] = "util/math.lua",
      ["util.platform"] = "util/platform.lua",
      ["util.table"] = "util/table.lua",
      wezterm = "wezterm.lua"
   }
}
