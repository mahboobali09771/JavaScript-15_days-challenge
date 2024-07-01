const todo = [
    {taskName: "going gym", status: false},
    {taskName: "going college", status: true},
    {taskName: "completing js lecture", status: false}
]
function todoSummarizer(todos){
    let completedTodos = todos.filter(data => data.status)
    return completedTodos
}
function todoSummarizerUsingMap(todos){
    let completedTodos = todos.map(data => {if(data.status){return data} else {return }})
    return completedTodos
}   
console.log(todoSummarizer(todo))
console.log(todoSummarizerUsingMap(todo))