/**
 * Q5. Implement a function multiplyWithCallback that takes an array of numbers and a callback function. The
function should multiply each element of the array by 2 and pass the result to the callback.
 */
// solution:-

function multiplyWithCallback(numbers, callback){
    const multiplyArray = numbers.map((num) => num * 2)
    callback(multiplyArray)
}
const inputArray = [1,2,3,4]
multiplyWithCallback(inputArray, (result) => {
    console.log(result)
})