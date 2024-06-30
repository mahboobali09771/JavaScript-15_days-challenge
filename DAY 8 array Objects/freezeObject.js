const person = {
    name: "mahboob",
    age: 21
}
console.log(person)

Object.freeze(person) // after freeze neither can add nor can replace nor can delete

console.log(Object.isFrozen(person)) // after isFrozen check true or false
person.name = "ali"
person.hobby = "cricket"

delete person.name;
console.log(person)