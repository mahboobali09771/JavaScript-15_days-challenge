// const nums = [1,2,3,4,5]
// const newNums = nums.map((num, index, arr) => num*2)
// console.log(newNums)


const products = [
    {id: 1, name: 'Laptop', price: 999},
    {id: 2, name: 'Phone', price: 499},
    {id: 3, name: 'Tablet', price: 299}
];
// using map to extract an array of product names
console.log(products.map(product => product.name))

sqr_arr = [1,2,3,4].map(elem => elem*elem)
console.log(sqr_arr)

fruits = ["Mango", "Apple", "Banana"]

transformed_fruits = fruits.map(f => f.toUpperCase())
console.log(transformed_fruits)
console.log(fruits) // map does't change original array