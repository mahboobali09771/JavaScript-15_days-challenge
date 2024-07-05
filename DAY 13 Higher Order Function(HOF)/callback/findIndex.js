const findIndex = (callback, nums) => {
    let index = -1;
    for(let i=0;i<nums.length; i++){
        if(callback(nums[i])){
            index = i;
            break;
        }
    }
    return index;
}
const arr = [1,2,3,5,7,9]
const condition = (num) => num > 5

console.log(findIndex(condition, arr))