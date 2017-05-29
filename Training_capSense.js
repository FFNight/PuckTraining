// Training_capSense.js
// Put finger on D11 on the circuit board --> LED turn on
// Capacitive sensing

var  on = false;
setInterval(function() {
  a = Puck.capSense();
  if (a > 6000)
    digitalWrite(LED1,1);
  else
    digitalWrite(LED1,0);
  //console.log(a);
}, 1000);