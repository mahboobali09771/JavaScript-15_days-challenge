const promise = Promise.reject('first')
promise.catch(response => console.log(response))