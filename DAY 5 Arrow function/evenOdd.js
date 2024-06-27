function findEvenOrOdd(num){
    if(num%2 == 0 ){
        return "Even"
    }else{
        return "False"
    }
}
console.log(findEvenOrOdd(2252))

// convert the above function as arrow function

myFun = (num) => {
    if(num%2 == 0 ){
        return "Even"
    }else{
        return "False"
    }
}
console.log(myFun(45))


// convert the above function as arrow function in one line // arrow + ternary operator
typ = (a) => (a%2 == 0 ) ?  "Even" :  "odd" 
console.log(typ(75))