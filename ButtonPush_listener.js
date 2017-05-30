var currentTemp = 0;
var busy = false;

function getTemp() {
  NRF.requestDevice({ timeout: 2000, filters: [{namePrefix: "Puck.js"}] }).then(function(device) {
    var found = false;
    var d = E.toString(device[i].data);

    // Example of device.data
    // new ArrayBuffer([2, 1, 5, 4, 22, 9, 24, 24, 13, 9, 80, 117, 
    //  99, 107, 46, 106, 115, 32, 99, 97, 55, 50])
    // temperature is after 9 (0x09), 24 (0x18), which is 24 in the example above

    // index of 0x1809 in advertised data
    var idx = d.indexOf(String.fromCharCode(0x09,0x18));
    if (idx>=0) {
      currentTemp = d.charCodeAt(idx+2);
      found = true;
    } else {
      currentTemp = 0;
      found = false;
    }

    if (found) {
      digitalWrite(LED2,1); // green = good
    } else {
      digitalPulse(LED1,1,50); // red = bad
    }
  }).catch(function() {
    digitalPulse(LED1,1,1000); // long red = cannot find
  });
}


// look every 10s for temperature
setInterval(getTemp, 10000);