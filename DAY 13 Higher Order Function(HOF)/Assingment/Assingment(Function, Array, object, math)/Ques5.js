/**
 * Q5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares.

 */
// solution:-

let uniqueNumbers = new Set([5,6,3,8,5,0,1,6])
let numberSquareMap = new Map()

uniqueNumbers.forEach(number => {
    numberSquareMap.set(number,number*number)
})

console.log(`unique Numbers = ${Array.from(uniqueNumbers).join(', ')}`)

console.log("Number Square Map  ")
numberSquareMap.forEach((square, number) => {
    console.log(`${number} : ${square}`)
})

