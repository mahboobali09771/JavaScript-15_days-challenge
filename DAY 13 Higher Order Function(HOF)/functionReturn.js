// higher order function because this function return function
function getMeGreetFun(){
    return (message)=> console.log(`hello, ${message}`)
}
getMeGreetFun()("how are you ?")