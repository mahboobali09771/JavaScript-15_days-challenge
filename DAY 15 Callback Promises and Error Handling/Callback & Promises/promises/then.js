const promise = new Promise(function(resolve, reject){
    // API CALL
    if(Math.random() > 0.5){
        resolve('Success');
    } else{
        reject('Failure')
    }
})
promise.then(response => console.log(response)) // if part executed