const student = {
    fname: "mahboob",
    lname: "ali",
    sayName: function(fname, lname){
        console.log(`Hii your name is ${fname + lname}`)
    },
    sayNameInPov: function(){
        console.log(`Hii your name is ${this.fname + this.lname}`)
    }
}

const anotherStudent = {
    fname: "friend",
    lname: "bestfriend"
}
 // bind will return a function
const binedfunction1 = student.sayNameInPov.bind(student)
const binedfunction2 = student.sayNameInPov.bind(anotherStudent)

binedfunction1()
binedfunction2()