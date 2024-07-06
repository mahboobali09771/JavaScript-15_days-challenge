const getFirstTwo = ([first, second , ...rest]) => {
    return [first, second]
}

console.log(getFirstTwo([1,2,3,4]))
console.log(getFirstTwo([6,7,8]))