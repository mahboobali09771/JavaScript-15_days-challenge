/**
 * Q1. You are building a counter application that tracks the number of times a button is clicked. Implement the
counter using closure.
 */
// solution:-
function createCounter(){
    let count = 0;

    return function(){
        count++;
        console.log(`click count: ${count}`)
    }
}
let clickCounter = createCounter()

clickCounter()
clickCounter()
clickCounter()
clickCounter()