const emailIds = ["mahboob@microsoft.com", "ali@google.com", "mahboob@microsoft.com"]
// loop way of removing duplicated

let uniqueEmailIds = []

for(let i=0; i<emailIds.length; i++){
    if(! uniqueEmailIds.includes(emailIds[i])){
        uniqueEmailIds.push(emailIds[i])
    }
}
console.log(uniqueEmailIds);

// using set
console.log(new Set(emailIds));