/**
 * Q3. Create a Map to store contact information (name, age, email, location) and implement a function to
retrieve contact details by name.
 */
// solution:-
const contactMap = new Map()
contactMap.set("mahboob",{
    age: 18,
    email: "mahboob@gmail.com",
    location: "India",
})
function getContact(name){
    return contactMap.get(name)

}

console.log(getContact("mahboob"))