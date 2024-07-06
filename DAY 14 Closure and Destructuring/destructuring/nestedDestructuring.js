const person = {
    name: 'mahboob',
    address: {city: 'patna', country: 'India'}
}

const getNestedInfo = ({name, address: {city, country}}) => {
    return `${name} live in ${city}, ${country}`
}

console.log(getNestedInfo(person))