// Training_magnetometer.js

// When a metallic object is close by, display "Metal detected"
// When removed, display "Metal removed"

// Note that the Puck must NOT be moved after the code is uploaded
// If moved need to reupload (it takes the starting location reading as base value)

var zero = Puck.mag();
var doorOpen = false;
var counter = 0;
var counterSum = 0;
function onMag(p) { // Ma
  p.x -= zero.x;
  p.y -= zero.y;
  p.z -= zero.z;
  var s = Math.sqrt(p.x*p.x + p.y*p.y + p.z*p.z);
  //console.log(s);
  var open = s<500; //Coefficent can be changed
  if (open!=doorOpen) {
    doorOpen = open;
    if (open)
      console.log("Metal removed");
    else
      console.log("Metal detected");
    digitalPulse(open ? LED1 : LED2, 1,500);
  }
  if (counter % 10 === 0) {
    //console.log("average = " + (counterSum/10));
    counterSum = 0;
  }
  counter++;
  counterSum+=s;
}
Puck.on('mag', onMag);
Puck.magOn(10);
