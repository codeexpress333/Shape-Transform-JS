//Get Values
const canvases = document.querySelectorAll('canvas');

//Shape of dimentions
const ctx1 = canvases[0].getContext('2d');
const ctx2 = canvases[1].getContext('2d');

//Set Transform
ctx1.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx1.fillRect(25, 25, 50, 50);

let storedTransform = ctx1.getTransform();
// console.log(storedTransform);

//ctx2
ctx2.setTransform(storedTransform);
ctx2.beginPath();
ctx2.arc(50, 50, 50, 0, 2 * Math.PI);
ctx2.fill();

