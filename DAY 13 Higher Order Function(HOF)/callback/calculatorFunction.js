function calculatorFunction(operation, initialValue, numbers){
    let total = initialValue
    for(const number of numbers){
        total = operation(total, number)
    }
    return total
}
function sum(n1,n2){
    return n1 + n2
}
function multiply(n1,n2){
    return n1 * n2
}
console.log(calculatorFunction(sum, 0, [1,3,4]))
console.log(calculatorFunction(multiply, 1, [1,3,4]))