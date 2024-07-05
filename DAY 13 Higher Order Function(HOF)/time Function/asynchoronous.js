// asynchoronous is not waiting for example start and end not waiting for printing value of i
console.log("Hello from the begining")
for(var i=0;i<5;i++){
    setTimeout(() => { // setTimeout is asynchoronous
        console.log(i)
    }, 1000);
}

console.log("hello from the end")

// for(let i=0;i<5;i++){ // let is use scope
//     setTimeout(() => {
//         console.log(i)
//     }, 2000)
// }

// for(var i=1;i<=16;i= i*2){ // rapping
//    (function(num){
//     setTimeout(() => {
//         console.log(num);
//     }, 3000);
//    })(i)
// }