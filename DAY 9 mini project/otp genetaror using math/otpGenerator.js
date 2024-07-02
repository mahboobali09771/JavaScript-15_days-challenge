function otpgenerator(){
    otp = Math.random()*10000 // Math.random() -> 0-1 * 10000
    return Math.floor(otp)
}
console.log(otpgenerator());
console.log(otpgenerator());
console.log(otpgenerator());
console.log(otpgenerator());
console.log(otpgenerator());