const person1 = {
    firstName: "mahboob",
    lastName: "ali"
}
const person2 = {
    fullName: function(city, country){
        console.log(`${this.firstName} ${this.lastName} lives in ${city}, ${country}`)
    }
}
const bound = person2.fullName.bind(person1)

bound("kolkata","India")
bound("London","Uk")
bound("Riyad","saudi arab")
