function calculator(fn, a, b){
    return fn(a,b)
}
console.log(calculator((a,b)=> a+b, 5,6))