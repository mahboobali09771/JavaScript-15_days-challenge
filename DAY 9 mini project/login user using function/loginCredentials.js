var admin_credentials ={
    email: "admin@ali.com",
    password: "admin1234"
}
function login(email, password){
    if(email == admin_credentials.email && password== admin_credentials.password){
        return "login sucessfull"
    }
    else if (email == admin_credentials.email && password != admin_credentials.password){
        return "password mismatch"
    }
    else{
        return "Invalid Credentials"
    }
}""
console.log(login("admin@ali.com", "admin1234"))
console.log(login("admin@ali.com", "admin123"))
console.log(login("admin@ai.com", "admin12"))