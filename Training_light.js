// Training_light.js

// Reading light sensor (top of Puck)

setInterval(function() {
  a = Puck.light() * 1000; // Get the capacitive sensing reading
  console.log(a);
}, 500); // Runs the setInterval routine every 1000ms