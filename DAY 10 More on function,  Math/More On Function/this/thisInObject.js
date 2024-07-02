const obj = {
    name: 'mahboob',
    age: 35,
    alias: this.name + " " + "ali",
    greet: function(){
        console.log(this.name)
    },
    greet2: ()=> console.log(this.name), // does't refer to the parent object
    address: {
        city: "patna",
        country: this.name + " " + "India" ,
        name: "mohammad",
        greet: function(){
            console.log(this.name)
        }
    }
}
obj.greet2()
obj.address.greet()
obj.greet()
console.log(obj.alias)  //global object  (undefined ali)
console.log(obj.address.country) // global object  (undefined india)