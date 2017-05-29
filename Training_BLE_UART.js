// Training_BLE_UART.js

// Search for another Puck.js nearby and sends a command to it
// In this case "digitalPulse(LED3,1,1000)\n" is sent to it

NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js' }] }).then(function(device) {
  require("ble_simple_uart").write(device, "digitalPulse(LED3,1,1000)\n", function() {
    print('Done!');
  });
});