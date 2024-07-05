const forEach = (cb, arr) => {
    for(let item of arr){
        cb(item)
    }
}
const callback = (item) => {
    console.log(item)
}
forEach(callback, [1,3,5])