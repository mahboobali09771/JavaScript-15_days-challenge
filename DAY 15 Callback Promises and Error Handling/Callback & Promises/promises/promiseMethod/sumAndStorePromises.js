// const promise1 = Promise.resolve(5);
// const promise2 = Promise.resolve(10);

// const promise = new Promise(function(resolve) {
//     let num1, num2;
//     promise1.then(res => {
//         num1 = res;
//         if(num1 && num2 ){
//             resolve(num1+num2)
//         }
//     })

//     promise2.then(res => {
//         num2 = res;
//         if(num1 && num2 ){
//             resolve(num1+num2)
//         }
//     })

// })
// promise.then(res => console.log(res))


const promise1 = Promise.resolve(5);
const promise2 = Promise.resolve(10);

const promise = new Promise(function(resolve) {
    Promise.all([promise1, promise2]).then(res => {
        resolve(res.reduce((sum , num) => sum+num))
    })

})
promise.then(res => console.log(res))

