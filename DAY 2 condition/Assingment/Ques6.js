/**
Q6. you are working on an e-commerce platform. Write a javascript program that takes the payment method("credit","debit",or "paypal") as input and uses a switch statement to determine and print the processing fee associated with each payment method.For example, "credit" may have a processing fee of 2%,"debit" 1.5%,and "paypal" 3%.
 */
// solution:-
let payment_method = "credit"
switch(payment_method){
    case "credit": 
        console.log("processing fee for credit payment: 2%");
             break;
    case "paypal" :
        console.log("processing fee for paypal payment: 3%");
                     break;
    case "debit" : 
        console.log("processing fee for debit payment: 1.5%");
            break;
    default:
        console.log("invalid payment method");
}