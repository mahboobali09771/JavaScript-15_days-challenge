const nums = [1,2,3,4,5];
const total = nums.reduce((sum, num, index, arr) => {
    sum = sum+num
    return sum
},0)
console.log(total)