/**
 * Q7.Tasks:
« Create an object named calculator with methods add, subtract, and multiply.
« Implement the calculate method in the calculator object, which takes an operation (‘add’, 'subtract’, or
‘multiply’) and two numbers.
« Use call to perform an addition operation using the calculate method.
« Use apply to perform a multiplication operation using the calculate method with arguments as an array.
« Create another object named discountCalculator with a discount percentage property and a method
applyDiscount.
+ Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and
can be reused.
Full Stack Web Developme!
 */
// solution:-


const calculator = {
    add: function(a,b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    },
    multiply: function(a,b){
        return a * b
    },
    calculate: function(operation, a, b){
        if(operation === 'add'){
            return this.add(a,b)
        }
        else if(operation === 'subtract'){
            return this.subtract(a,b)
        }
        else if(operation === 'multiply'){
            return this.multiply(a,b)
        }
    }
}

const additionResult = calculator.calculate.call(calculator, 'add', 10, 5)
console.log(`Addition Result : ${additionResult}`)


const multiplicationResult = calculator.calculate.apply(calculator, ['multiply',24, 4])
console.log(`Multiplication Result : ${multiplicationResult}`)

const discountCalculator = {
    discountPercentage : 10,
    applyDiscount : function(amount){
        return amount - (amount * this.discountPercentage)/100
    },
}

const calculateDiscount = discountCalculator.applyDiscount.bind(discountCalculator)
const discountAmount = calculateDiscount(100)
console.log(`Discount Amount : ${discountAmount}`)


