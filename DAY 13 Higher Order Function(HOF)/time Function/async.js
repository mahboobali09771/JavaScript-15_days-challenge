// asynchoronous is not waiting for example Hello from the begining and Hello from the end not waiting for printing Hello from the callback fn
console.log("Hello from the begining")

setTimeout(() => {
    console.log("Hello from the callback fn")
}, 3000)

console.log("Hello from the end")