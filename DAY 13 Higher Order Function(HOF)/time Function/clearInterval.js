let count = 10
const countDown = () => {
    console.log(count--)
    if(count === 0){
        clearInterval(timer)
    }
}
const timer = setInterval(countDown, 1000)