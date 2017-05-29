// Training_LED.js

// Press the button to turn the LED on and off

var on = true; // Used as a toggle for the 'if' condition below
setWatch(function() { // 'Watch' the button to see if it is triggered
  if (on) digitalWrite(LED1, 1);
  else digitalWrite(LED1, 0);
  on = !on;
}, BTN, {edge:"rising", debounce:50, repeat:true}); 