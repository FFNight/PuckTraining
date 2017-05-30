setWatch(function() {
  NRF.setAdvertising({
    0x1809 : [100] // 0x1809 is UUID for Health Thermometer for Bluetooth GATT service
  });
  digitalWrite(LED3,1);
}, BTN, {edge:"falling", debounce:50, repeat:true});

setWatch(function() {
  NRF.setAdvertising({
    0x1809 : [0] // 0x1809 is UUID for Health Thermometer for Bluetooth GATT service
  });
  digitalWrite(LED3,0);
}, BTN, {edge:"rising", debounce:50, repeat:true});