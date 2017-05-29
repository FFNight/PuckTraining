// Training_light.js

// Reading changes when the light is blocked (top of Puck)

setInterval(function() {
  a = Puck.light(); // Get the capacitive sensing reading
  console.log(a);
}, 1000); // Runs the setInterval routine every 1000ms