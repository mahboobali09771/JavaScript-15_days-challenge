const obj = {
    firstName: 'mahboob',
    lastName: 'Ali',
}
const {firstName,middleName = 'None', lastName='LN'} = obj
console.log(firstName,middleName,lastName)