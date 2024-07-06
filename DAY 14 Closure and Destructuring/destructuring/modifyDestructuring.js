const person = {
    name: 'mahboob',
    age: 20,
    address: {
        city: 'Delhi',
        country: 'India'
    }
}

const modifyPerson = (person) => {
    const {name, age, address: {city}} = person
    return {
        fullName: name,
        age: age*2,
        currentCity: city,
    }
}

const modifiedPerson = modifyPerson(person);

console.log(modifiedPerson.fullName)
console.log(modifiedPerson.age)
console.log(modifiedPerson.currentCity)
console.log(person.name)
console.log(person.age)
console.log(person.address.city)