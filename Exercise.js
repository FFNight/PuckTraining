// Exercise.js

setWatch(function() { // 'Watch' the button to see if it is triggered
  NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js ca72' }] }).then(function(device) {
  require("ble_simple_uart").write(device, "digitalPulse(LED3,1,1000)\n", function() {
    print('Done!');
  });
});
}, BTN, {edge:"rising", debounce:50, repeat:true}); 