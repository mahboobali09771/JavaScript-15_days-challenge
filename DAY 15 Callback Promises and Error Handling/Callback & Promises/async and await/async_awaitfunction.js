async function printHelloAfterWait(){
    // await is always applied to promise
    let result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello Students")
        },3000)
    })
    console.log(result)
    console.log("This line should be the last print")
}

console.log("First line")
printHelloAfterWait()
console.log("last line")