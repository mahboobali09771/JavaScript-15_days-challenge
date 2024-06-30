const emp = {
    name: "mahboob",
    age: 21,
    sallary: 100000,
    address: {
        city: "muzaffarpur",
        country: "India"
    }
}

console.log(Object.keys(emp))
console.log(Object.values(emp))

// list of all the key value pairs

console.log(Object.entries(emp))

console.log(emp)

// assign 
emp_new = Object.assign({},emp, {role: "developer"}) // new empty object , existing object , addition attributes
console.log(emp_new)


emp.jobType = "remote";
console.log(emp)