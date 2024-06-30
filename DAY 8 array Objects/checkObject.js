const person = { // 
    name: "mahboob",
    age: 21,
    salary: 100000
}
console.log(Object.hasOwn(person,"name")) // only check key is present or not
console.log(Object.hasOwn(person,"company"))
console.log(Object.hasOwn(person,"salary"))