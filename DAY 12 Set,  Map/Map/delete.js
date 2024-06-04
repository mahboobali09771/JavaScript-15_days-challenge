const mapDemo = new Map()
mapDemo.set("first name", "mahboob") // key,value
mapDemo.set("last name", "ali")
mapDemo.set("age", 20)
mapDemo.set(10, 20)
mapDemo.set("male", true)
mapDemo.set(false, true)
console.log(mapDemo)


mapDemo.delete("first name")
console.log(mapDemo)