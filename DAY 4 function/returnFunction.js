function return_greet_fn(){
    return function(){
        console.log("Hello sir")
    }
}
return_greet_fn()()