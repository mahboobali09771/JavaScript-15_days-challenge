async function f () {
    const  promise = new Promise(function(resolve){
        setTimeout(() => {
            resolve('res')
        }, 1000)
    })
    const data = await promise;
    
    console.log('between')
    console.log(data)
}

f();