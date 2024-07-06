const obj = {
    name: "mahboob",
    age: 18,
    salary: 10000000,
    address: {
        country: "India"
    }
}
let {address: {country}} = obj
let {name, age, salary} = obj
console.log(age)
console.log(name)
console.log(salary)
console.log(country)