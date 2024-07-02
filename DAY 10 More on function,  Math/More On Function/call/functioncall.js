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

student.sayNameInPov.call(student)
student.sayNameInPov.call(anotherStudent)