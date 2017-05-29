// Training_capSense.js

// Put finger on D11 on the circuit board --> LED turn on
// Capacitive sensing

setInterval(function() {
  a = Puck.capSense(); // Get the capacitive sensing reading
  if (a > 6000) // Set the threshold here
    digitalWrite(LED1,1);
  else
    digitalWrite(LED1,0);
  //console.log(a);
}, 1000); // Runs the setInterval routine every 1000ms