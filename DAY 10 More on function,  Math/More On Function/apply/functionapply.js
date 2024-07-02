const student = {
    fname: "mahboob",
    lname: "ali",
    sayName: function(fname, lname){
        console.log(`Hii your name is ${fname + lname}`)
    },
    sayNameInPov: function(){
        console.log(`Hii your name is ${this.fname + this.lname}`)
    },
    sayNameInPovWithOtherParameters: function(greet){
        console.log(`${greet} your name is ${this.fname + this.lname}`)
    }
}

const anotherStudent = {
    fname: "friend",
    lname: "bestfriend"
}
student.sayNameInPovWithOtherParameters.call(student, "hello")

// apply imidiately invokes a function, extra parameters can be passed as an array
student.sayNameInPovWithOtherParameters.apply(student, ["Hii"])