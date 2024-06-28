
add  = (arr) => {
    sum = 0
for(i=0;i<arr.length;i++){
    sum = sum + arr[i];
}
    return sum;
}
let arr = [1,2,3,4,5]
console.log(add(arr))