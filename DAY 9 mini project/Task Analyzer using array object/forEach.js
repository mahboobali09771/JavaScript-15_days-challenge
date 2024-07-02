const names = ["mahboob", "ali", "mohammad"]
console.log("using for loop")
for(let i=0;i<names.length;i++){
    console.log(names[i])
}
console.log("using for each loop")
names.forEach((data) => {
    console.log(data)
})
console.log("using forEach but not return anything" )
const temp = names.forEach((hello) => {
    console.log(hello)
})
console.log(temp)