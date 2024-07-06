function outer(){
    let count = 0
    return function(){
        console.log(count++)
    }
}
const counter = outer()
counter()
counter()
counter()
counter()
counter()
counter()
counter()