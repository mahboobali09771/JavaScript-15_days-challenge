function fact(num){
    prod=1;
    sum = 0
    while(num>0){
        prod = prod*num;
        num--;
    }
    return prod;
}
let num = 5;
factorial = fact(num)
console.log(`factorial of ${num}! is = ${factorial} `)
