/**
 * Q7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3]. Your task is to use
the forEach method to iterate through each element in the array. During the iteration, double the value of each number. After completing the iteration, display the modified array.
 */
// solution:-

let originalNumbers = [2,5,8,10,3]
originalNumbers.forEach((number, index, array) => {
    array[index] = number * 2
})
console.log("Doubled Numbers:", originalNumbers)