const promise1 = new Promise(function(resolve,reject){
    reject('first');
})
const promise2 = new Promise(function(resolve){
    resolve('second');
})
const promise3 = new Promise(function(resolve){
    resolve('third');
})
const anyPromises = [promise1, promise2, promise3];

Promise.any(anyPromises) // any is like or operator
 .then(res => console.log(res))