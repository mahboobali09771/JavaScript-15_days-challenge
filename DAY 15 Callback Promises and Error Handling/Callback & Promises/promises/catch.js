
const promise = new Promise(function(resolve, reject){
    // API CALL
    if(Math.random() > 0.5){
        resolve('Success');
    } else{
        reject('Failure')
    }
})
promise.catch(error => console.log(error)) // else part executed