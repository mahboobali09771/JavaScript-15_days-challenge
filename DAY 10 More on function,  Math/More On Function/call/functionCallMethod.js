const mechanic = {
    name: "mahboob",
    fixItem: function(itemName, arg){
        console.log(`${this.name} ${itemName} ${arg} has been fixed`)
    }
}
const person = {
    name: "ali"
}

mechanic.fixItem.call(person,"TV", "xyz")