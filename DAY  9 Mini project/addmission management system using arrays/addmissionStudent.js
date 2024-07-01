// Arrays: Attendence management system
const students = []
function listStudents(){
    return students
}
function addStudents(name){
    students.push(name)
    return `student ${name} added successfully`
}
function removeStudent(name){
    // Task 1: find the index of the element to be removed => indexof
    let elementIndex = students.indexOf(name)
    console.log(elementIndex)

    //Task 2: To remove the element from that index => splice
    students.splice(elementIndex, 1) 

    //Task 3: To print something
    return `student ${name} removed sucessfully`
}
console.log(listStudents())
console.log(addStudents("mahboob"))
console.log(addStudents("ali"))
console.log(listStudents())
console.log(removeStudent("ali"))
console.log(listStudents())