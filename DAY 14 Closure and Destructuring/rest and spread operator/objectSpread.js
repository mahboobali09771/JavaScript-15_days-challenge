let obj1 = {
    name: "mohammad mahboob",
    course: "artificial intelligence"
}
let obj2 = {rating: 5, reviews: 3000 , name: 'ali'};
const obj = {...obj1, ...obj2};
console.log(obj)