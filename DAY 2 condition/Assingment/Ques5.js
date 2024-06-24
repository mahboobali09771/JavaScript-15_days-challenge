/**
 Q5. You're creating a basic login system. Make a login function with two things: a username and a password. Check if the username is "admin" and the password is "12345". if they're both correct, show "login successful"; if not, show "invalid credentials."
 let username = "admin";
 let password = "12345";
 login successful
 */
// solution:-
let username = "admin";
let password = "12345";
if(username=="admin" && password == "12345"){
    console.log("login successful")
}
else{
    console.log("invalid credentials")
}