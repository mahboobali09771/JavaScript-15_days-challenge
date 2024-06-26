function sum(){
    console.log(arguments)

    let sum = 0
    for(i=0;i<arguments.length;i++){
        sum = sum + arguments[i]
    }
    return sum
}

console.log(sum(5,6));
console.log(sum(5,6,7,8));