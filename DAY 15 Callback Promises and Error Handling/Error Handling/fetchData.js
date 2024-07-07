const fetchData = (url) => {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve('api data')
            } else {
                reject(new Error('costom error'))
            }
        }, 1000)
    })
}
fetchData('url')
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })