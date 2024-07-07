const promise = new Promise(function(resolve, reject){
    // API CALL
    if(Math.random() > 0.5){
        resolve({city: 'Delhi', temperature: '39'});
    } else{
        reject({code: 402, message: 'Data not found'});
    }
})


promise.then(response => console.log(response)).catch(error => console.log(error))


// promise.then(response => console.log(response)) // if part executed
// promise.catch(error => console.log(error)) // else part executed

