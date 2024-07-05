const twice = x => x*2
const sqr = x => x*x
 // const compose = (fn1,fn2) => (value) => fn1(fn2(value))

function compose(fn1, fn2){
    return (value) => fn1(fn2(value))
}

console.log(compose(sqr, twice)(5))