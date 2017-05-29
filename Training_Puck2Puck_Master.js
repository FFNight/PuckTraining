// Training_Puck2Puck_master.js

// Turns on the LED of the slave Puck (Need to be configured first)
// Then runs the "rebroadcast()" function on the slave Puck

NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js' }] }).then(function(device) {
  require("ble_simple_uart").write(device, "digitalWrite(LED1,1);\nrebroadcast();\n", function() {
    print('Done!');digitalWrite(LED2,1);
  });
});