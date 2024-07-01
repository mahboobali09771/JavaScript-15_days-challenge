function dateBot(dob){
    let dobString = new Date(dob)
    let presentDate = new Date()
    if(dobString > presentDate){
        return "Invalid date"
    } else {
        return "Valid date"
    }
}
console.log(dateBot('2024-02-01'))
console.log(dateBot('2024-02-15'))



// how to find present date and time

let DateTime = new Date()
console.log(`present date and time in utr format ${DateTime}`)

console.log(`present date and time in indian format ${DateTime.toLocaleString()}`)