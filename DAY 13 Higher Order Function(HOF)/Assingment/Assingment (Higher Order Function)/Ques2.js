/**
 * Q2. In this challenge, your task is to create a function tha generates a random number and prints it to the
console every 2 seconds. The program should keep printing new random numbers indefinitely, with a 2-second delay between each number.
 */
// solution:-

function randomNumberGenerator(){
    const randomNumber = Math.floor(Math.random()*100)
    console.log(randomNumber)
}
function printWithInterval(){
    randomNumberGenerator()
    setInterval(randomNumberGenerator, 2000)
}

printWithInterval()