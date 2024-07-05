function hiFunction(name, callback){
    console.log('Hi' + ' ' + ' I am the actual function')
    callback()
}



// callback function
function exampleFunction(){
    console.log('I come from the callback function')
    hello()
}
function hello(){
    console.log("hello i am callback hell because i am using nested function")
    mahboob()
}
function mahboob(){
    console.log("hello i am also callback hell because i am using nested function")
}

// passing function as an argument
hiFunction('Folks', exampleFunction)