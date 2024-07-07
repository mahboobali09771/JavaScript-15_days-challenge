const promise = new Promise(function(resolve, reject){
   console.log("start loader")
    // API CALL
    if(Math.random() > 0.5){
        resolve({city: 'Delhi', temperature: '39'});
    } else{
        reject({code: 402, message: 'Data not found'});
    }
})

promise
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => {
    console.log('stop loader')
})