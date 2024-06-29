arr = [3,4,5,[7,9,1]]
flat_array = arr.flat()
// console.log(flat_array)
// console.log(arr)

arr2 = [1,2,3,[4,5,[7,8,[9,10,11]]]]
console.log(arr2.flat()) // flat() - does 1st level of flattening
console.log(arr2.flat(2))  // 2 is level of flattening
console.log(arr2.flat(3))  // 3 is level of flatting
console.log(arr2.flat(4))  // 4 is level of flatting

console.log(arr2.flat().flat().flat()) // another method of flatting
