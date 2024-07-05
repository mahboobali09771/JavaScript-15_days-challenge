const sqr = (num) => num*num
const dbl = (num) => num*2
const compose = (fun1, fun2) => value =>fun1(fun2(value))
const sqrThenDbl = compose(sqr,dbl)

console.log(sqrThenDbl(4))