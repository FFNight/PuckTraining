var on = true;
setWatch(function() {
  if (on) digitalWrite(LED1, 1);
  else digitalWrite(LED1, 0);
  on = !on;
}, BTN, {edge:"rising", debounce:50, repeat:true});