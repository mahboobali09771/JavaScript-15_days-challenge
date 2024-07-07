const fetchData = (url) => {
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            if(Math.random() > 0.5){
                resolve(`api data ${url}`)
            } else {
                reject(new Error(`costom error  ${url}`))
            }
        }, 1000)
    })
}
Promise.all([fetchData('url1'), fetchData('url2')])
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })