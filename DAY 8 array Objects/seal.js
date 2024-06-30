// seal -> no add , no delete , but only edit

const person = {
    name : "mahboob",
    age : 21
}
console.log(person)
Object.seal(person)
person.name = "Ali"
console.log(person)
person.hobby = "cricket"
console.log(person)
delete person['hobby']
console.log(person)