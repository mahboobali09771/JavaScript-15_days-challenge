const todo = [
    {taskName: "going gym", status: false},
    {taskName: "going college", status: true},
    {taskName: "completing js lecture", status: false}
]
function taskAnalyser(todo){
    todo.forEach((data) => {
        if(data.status){
            console.log(`task ${data.taskName} is completed`)
        }
        else{
            console.log(`task ${data.taskName} is pending`)
        }
    })
}
taskAnalyser(todo)