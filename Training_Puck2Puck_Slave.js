// Working (tied with v11a)

//"digitalWrite(LED3,0)\ndigitalWrite(LED2,0)\ndigitalWrite(LED1,1)\n"


function rebroadcast(command) {  
  NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js' }] }).then(function(device) {
  require("ble_simple_uart").write(device, "digitalWrite(LED1,1)\n", function() {
    print('Done!');digitalWrite(LED2,1);
  });
});

}