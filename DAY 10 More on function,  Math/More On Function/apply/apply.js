const person1 = {
    firstName: "mahboob",
    lastName: "ali"
}
const person2 = {
    fullName: function(city, country){
        console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${country}`)
    }
}
person2.fullName.apply(person1,['patna', 'India'])