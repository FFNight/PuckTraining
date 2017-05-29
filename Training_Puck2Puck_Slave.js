// Training_Puck2Puck_Slave.js

// Must run on slave Puck before the master Puck is configured
// Does not do anything at first, it only declares the "rebroadcast()" function
// which is used by the master code

function rebroadcast(command) {  
  NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js' }] }).then(function(device) {
  require("ble_simple_uart").write(device, "digitalWrite(LED1,1)\n", function() {
    print('Done!');digitalWrite(LED2,1);
  });
});

}