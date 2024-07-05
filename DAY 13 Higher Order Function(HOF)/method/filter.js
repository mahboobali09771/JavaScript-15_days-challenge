const nums = [1,2,3,4,5]
const newNums = nums.filter((num, index, arr) => num%2!==0)
console.log(newNums)
console.log(nums) // filter does't change original array


even_elements = [1,2,3,4,5,6,7,8,9,10].filter((num) => num%2==0)
console.log(even_elements)