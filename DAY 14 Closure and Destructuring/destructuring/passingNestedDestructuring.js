const company = {
    name: 'TechCo',
    CEO: {
        name: 'Mahboob Ali',
        age: 20,
        address: {
            city: 'patna',
            country: 'India'
        }
    },
};

const getCEOInfo = ({CEO}) => {
    const {name, age, address: {city}} = CEO;
    return {name, age, city}
}

const ceoInfo = getCEOInfo(company);

console.log(ceoInfo.name)
console.log(ceoInfo.age)
console.log(ceoInfo.city)