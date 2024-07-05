// synchoronous is waiting for example interval stopped after completed 20000ms

let count = 0;
function printCount(){
    console.log("Interval Count:", count);
    count++
}
console.log("Start"); // synchoronous
const interValid = setInterval(printCount, 500);
setTimeout(function(){
    clearInterval(interValid);
    console.log("Interval stopped");
}, 20000);
console.log("End") // synchoronous