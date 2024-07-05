fruits = ["Mango", "Apple", "Banana"]
fruits.forEach(print)
fruits.forEach(capital)

function print(str){
    console.log(str)
}

function capital(str){
    console.log(str.toUpperCase())
}

// const nums = [1,2,3,4,5];
// nums.forEach((num, index, arr) => {
//     console.log(num, arr[index])
// })