const promise1 = new Promise(function(resolve){
    resolve('first');
})
const promise2 = new Promise(function(resolve){
    resolve('second');
})
const promise3 = new Promise(function(resolve){
    resolve('third');
})
const allPromises = [promise1, promise2, promise3];

Promise.all(allPromises)  // all is like and operator
 .then(res => console.log(res))
 .catch(error => console.log(error))
 .finally(() => {
    console.log('stop loader')
 })


//  const promise1 = new Promise(function(resolve){
//     resolve('first');
// })
// const promise2 = new Promise(function(resolve,reject){
//     reject('second');
// })
// const promise3 = new Promise(function(resolve){
//     resolve('third');
// })
// const allPromises = [promise1, promise2, promise3];

// Promise.all(allPromises)
//  .then(res => console.log(res))
//  .catch(error => console.log(error))
//  .finally(() => {
//     console.log('stop loader')
//  })