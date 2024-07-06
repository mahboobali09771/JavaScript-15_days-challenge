const person = {
    name: 'mahboob',
    age: 25,
    address: {
        city: 'kolkata',
        country: 'India'
    }
}

const {name, ...remaining} = person;
console.log(remaining)