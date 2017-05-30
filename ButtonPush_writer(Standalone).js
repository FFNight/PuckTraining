NRF.findDevices(function(devices) {
	for (var i=0; i<devices.length; i++) {
		// if device is Puck, on its red light
		if (devices[i].name !== undefined && devices[i].name.indexOf("Puck.js") != -1) {
			require("ble_simple_uart").write(devices[i], "digitalWrite(LED1,1);\n", function() {
			  // blink green if successfully written
			  digitalPulse(LED2,1,1000);
			});
		}
	}
}, 1000);