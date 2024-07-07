const gf1promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("gf1 is ready to come")
        }
        else{
            reject("gf1 is not coming")
        }
    },1000)
})

const gf2promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("gf2 is ready to come")
        }
        else{
            reject("gf2 is not coming")
        }
    },1000)
})

const gf3promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("gf3 is ready to come")
        }
        else{
                reject("gf3 is not coming")
        }
    },1000)
})


const gfPromises = [gf1promise, gf2promise, gf3promise]

Promise.any(gfPromises)
.then(result =>{
    console.log(result)
console.log("My Valentine date is confirmed")
} )
.catch(meg => {
    console.log(meg)
    console.log("Kitne aur relationships banau")

})
.finally(() => {
    console.log("now all clear")
})