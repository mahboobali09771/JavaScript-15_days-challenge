//  discount 
var amount = 450
var day ="monday"
if(amount <= 100){
    if(day == "monday"){
        console.log((amount-(amount*0.1))-10)
    }
    else{
        console.log(amount-(amount*(0.1)))
    }
}
else if(amount>100 && amount<=200){
    if(day == "monday"){
        console.log((amount-(amount*0.2))-10)
    }
    else{
        console.log(amount-(amount*0.2))
    }
}
else if(amount>200 && amount<=500){
    if(day == "monday"){
        console.log((amount-(amount*0.3))-10)
    }
    else{
        console.log(amount-(amount*0.3))
    }
}
else if(amount>500){
    if(day == "monday"){
        console.log((amount-(amount*0.4))-10)
    }
    else{
        console.log(amount-(amount*0.4))
    }
}
else{
    console.log("no discount")
}