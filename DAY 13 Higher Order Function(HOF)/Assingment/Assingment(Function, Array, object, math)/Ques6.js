/**
 * Q6
« Create a simple JavaScript function named displayinfo that takes two parameters (name and role) and
logs a message.
« Use call to invoke the displayinfo function with specific arguments.
« Use apply to invoke the displayinfo function with arguments passed as an array.
« Create another function named greet that logs a greeting with this context.
« Use bind to create a new function boundGreet with a specific context and log the greeting.
 */
// solution:- 

function displayInfo(name, role){
    console.log(`Name : ${name}, Role: ${role}`)
}

displayInfo.call(null, "mahboob", "software developer")

displayInfo.apply(null, ["ali", "SDE"])

function greet(){
    console.log(`Hello, ${this.name}`)

}

const user = {name: "alam"}
const boundGreet = greet.bind(user)
boundGreet()