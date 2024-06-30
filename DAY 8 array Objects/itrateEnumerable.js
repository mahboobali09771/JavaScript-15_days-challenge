// enumerable
const person = {
    name: "mahboob",
    age: 21,
    salary: 100000
}
// Object.defineProperties(person,{
//     salary: {
//      value: 100000,
//     enumerable: false
//     }
// })
for(k in person){
    console.log(k)
}