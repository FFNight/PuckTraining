// Working

//"digitalWrite(LED3,0)\ndigitalWrite(LED2,0)\ndigitalWrite(LED1,1)\n"

//var sub_command = "digitalWrite(LED1,1);\n";
//var sub_command2 = "'digitalWrite(LED1,1);\n'";
//var command = sub_command + "rebroadcast(" + sub_command2 + ");\n";

NRF.requestDevice({ filters: [{ namePrefix: 'Puck.js' }] }).then(function(device) {
  require("ble_simple_uart").write(device, "digitalWrite(LED1,1);\nrebroadcast();\n", function() {
    print('Done!');digitalWrite(LED2,1);
  });
});