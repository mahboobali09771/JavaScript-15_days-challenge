// passed as an argument to a function
function operate(a,b,fn){
    console.log(fn(a,b))
}
function sum2(a,b){
    return a+b
}
operate(5,6,sum2)