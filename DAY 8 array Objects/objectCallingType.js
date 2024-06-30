const student = {
    name: "mahboob",
    age: 21,
    address: {
        city: "muzaffarpur",
        state: "Bihar",
        country: "India"
}
}
console.log(student)

// I would like to read the properties of students
console.log(student.name)

console.log(student["age"]) // using bracket notation
console.log(student.address.city)
console.log(student["address"]["state"])
console.log(student["address"].country)

// I would like to insert new field
