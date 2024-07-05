function hiFunction(name, callback){
    console.log('Hi' + ' ' + ' I am the actual function')
    callback()
}



// callback function
function exampleFunction(){
    console.log('I come from the callback function')
}

// passing function as an argument
hiFunction('Folks', exampleFunction)