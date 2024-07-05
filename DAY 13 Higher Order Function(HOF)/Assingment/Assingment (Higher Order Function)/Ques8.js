/**
 * Q8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a
new array.
 */
// solution:-

let originalNumbers = [2,5,8,10,3]
let evenNumbers = []
originalNumbers.forEach((number) => {
   if(number %2 === 0){
    evenNumbers.push(number)
   }
})
console.log("Even Numbers:", evenNumbers)