/**
 * Q3. You are given an array of expense objects representing monthly expenses. Each object has properties, amount and category. Use the map method to create a new array that includes the calculated tax for each
expense. Assume a tax rate of 10%.
 */
// solution:-
let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"}
]
let expenseWithTax = expenses.map((expense) => {
    let taxes = expense.amount*0.1;
    return {...expense,tax:taxes}
});

console.log("Expenses with Tax:", expenseWithTax)