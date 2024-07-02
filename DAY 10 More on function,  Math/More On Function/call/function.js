const student = {
    fname: "mahboob",
    lname: "ali"
}
const anotherStudent = {
    fname: "hello",
    lname: "sir"
}

function sayName2(fname, lname){
    console.log(`Hii, your name is ${fname + lname}`)
}

sayName2(student.fname,student.lname)

function sayName3(person){
    const {fname, lname} = person
    console.log(`Hii, your name is ${fname + lname}`)
}

sayName3(student)