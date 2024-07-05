/**
 * Q1. You are building an e-commerce website. Write a function that calculates the total price of a customer's order. You're given an array of items, each with a price property. Use the forEach method to iterate through the array and sum up the prices to get the total order amount.
 */
// solution:-
const orderList = [
    {name: "Laptop", price: 120000},
    {name: "Mobile", price: 70000},
    {name: "Mobile Charger", price: 1500},
    {name: "Laptop Charger", price: 10500},
];
let sum = 0;
orderList.forEach((data) => (sum += data.price))
console.log(`The total price is Rs. ${sum}`)

