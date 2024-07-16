-- local testCallbackFn = function(result) print("Callback Result: " .. result) end

-- hs.dialog.alert(400, 400, testCallbackFn, "Message", "Informative Text", "Button One", "Button Two",
--   "NSCriticalAlertStyle")
-- hs.dialog.blockAlert("Message", "Informative Text", "Button One", "Button Two", "NSCriticalAlertStyle")
-- hs.dialog.alert(500, 500, testCallbackFn, "Message", "Informative Text", "Single Button")

-- hs.dialog.textPrompt("Main message.", "Please enter something:")
-- hs.dialog.textPrompt("Main message.", "Please enter something:", "Default Value", "OK")
-- hs.dialog.textPrompt("Main message.", "Please enter something:", "Default Value", "OK", "Cancel")
-- hs.dialog.textPrompt("Main message.", "Please enter something:", "", "OK", "Cancel", true)

-- local testCallbackFn = function(result) print("Callback Result: " .. result) end
-- local testWebviewA = hs.webview.newBrowser(hs.geometry.rect(250, 250, 250, 250)):show()
-- local testWebviewB = hs.webview.newBrowser(hs.geometry.rect(450, 450, 450, 450)):show()
-- hs.dialog.webviewAlert(testWebviewA, testCallbackFn, "Message", "Informative Text", "Button One", "Button Two", "warning")
-- hs.dialog.webviewAlert(testWebviewB, testCallbackFn, "Message", "Informative Text", "Single Button")

-- print(hs.dialog.chooseFileOrFolder('message', '~', true, true, false))

-- print("caps", hs.hid.led.set("caps", true))

-- function test(one, two)
--   print(one, two)
-- end

-- local part = hs.fnutils.partial(test, "one")
-- part("two")
