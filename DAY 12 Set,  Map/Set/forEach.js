const data = new Set()
data.add(4)
data.add(5)
data.add(6)
console.log(data)
function multiply(value1, value2){
    console.log(`data[${value1}] : ${value2}`)
}
data.forEach(multiply)