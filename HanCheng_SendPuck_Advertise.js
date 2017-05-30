// broadcast advertisement of temperature measured in Puck


setWatch(function() { // 'Watch' the button to see if it is triggered
  
  setInterval(function() {
  var t = Math.round(E.getTemperature());
  console.log("Advertise temperature "+t);
  NRF.setAdvertising({
    0x1809 : [t] // 0x1809 is UUID for Health Thermometer for Bluetooth GATT service
  });
  digitalPulse(LED3,1,50); // blink blue
}, 5000);
  
}, BTN, {edge:"rising", debounce:50, repeat:true}); 