NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js' }] }).then(function(device) {
  require("ble_simple_uart").write(device, "digitalPulse(LED3,1,1000)\n", function() {
    print('Done!');
  });
});