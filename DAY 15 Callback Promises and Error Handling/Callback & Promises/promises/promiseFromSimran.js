/**
 * promise from simran for rahul
 */
const promiseFromSimran = new Promise((resolve, reject) => {
    let parentDecision = true
    if(parentDecision){
        resolve("yah, shaadi ki tayyari karo")
    }
    else{
        reject("Papa ne doosra IAS dhoond lia hai")
    }
});

promiseFromSimran.then((message) => {
    console.log("Message from my girl : " + message)
    console.log("My life is set !!!")
})
.catch((msg) => {
    console.log("Message from my girl : " + msg)
    console.log("Where is my tinder !")
})
.finally(() => {
    console.log("finally I am clear")
})