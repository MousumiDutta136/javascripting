//to monitor how often cars pass by, and track their speeds.


function carPassing(carsArray, checkspeed){
  let oCarsArray = {
    time: Date.now(),
    speed: checkspeed
  };
  carsArray.push(oCarsArray);
  return carsArray;
}
  
let cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

let speed = 38;

console.log(carPassing(cars, speed));