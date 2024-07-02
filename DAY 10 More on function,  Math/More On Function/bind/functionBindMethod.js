const mechanic = {
    name: "mahboob",
    fixItem: function(itemName, arg){
        console.log(`${this.name} ${itemName} ${arg} has been fixed`)
    }
}
const person = {
    name: "ali"
}
console.log(mechanic.fixItem.bind(person,"TV", "mobile"))
mechanic.fixItem.bind(person,"TV", "mobile")()