const dost1promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("Dost1 is ready to come")
        }
        else{
            reject("Dost1 is not coming")
        }
    },1000)
})

const dost2promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("Dost2 is ready to come")
        }
        else{
            reject("Dost2 is not coming")
        }
    },1000)
})

const dost3promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5){
            resolve("Dost3 is ready to come")
        }
        else{
                reject("Dost3 is not coming")
        }
    },1000)
})

/**
 * only if all of them comes, I will marry ,  else not marry
 */

const friendPromises = [dost1promise, dost2promise, dost3promise]

Promise.all(friendPromises)
.then(result =>{
    console.log(result)
console.log("I will marry")
} )
.catch(meg => {
    console.log(meg)
    console.log("Since all my friend did't come, I will not marry")

})
.finally(() => {
    console.log("now all clear")
})