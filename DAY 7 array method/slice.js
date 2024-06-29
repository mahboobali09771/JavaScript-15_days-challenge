// slicing

let arr = [5,7,1,2,9,11,15,12,6]
sliced_arr = arr.slice(2,5);
console.log(arr)
console.log(sliced_arr)

console.log(arr.slice()) // if no argument, then no action -- entire array will be returned

console.log(arr.slice(2)) // take out the array starting from 2nd index

console.log(arr.slice(0,4,2))

console.log(arr.slice(-1))
console.log(arr.slice(-4,-1)) // last index is excluded
