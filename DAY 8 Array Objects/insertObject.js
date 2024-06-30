// I would like to insert new field
const person = {}

person.name = "mahboob"
person.hobbey = "cricket"
person["country"] = "India"

console.log(person)
person.name = "ali" // update the fields of the object

console.log(person)

delete person["name"];
console.log(person)

