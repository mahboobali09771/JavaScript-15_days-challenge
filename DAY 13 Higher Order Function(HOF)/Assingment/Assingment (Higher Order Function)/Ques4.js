/**
 * Q4. Using the same array of expense objects, use the filter method to create a new array that includes only the expenses related to the category "Groceries."
 */
// solution:-
let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"}
]
let groceriesExpenses = expenses.filter((expense) => expense.category === "Groceries"
);

console.log("Groceries Expenses:", groceriesExpenses)