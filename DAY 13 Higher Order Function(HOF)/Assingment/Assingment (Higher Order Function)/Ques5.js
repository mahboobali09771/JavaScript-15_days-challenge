/**
 * Q5. Using the same array of expense objects, use the reduce method to calculate the total amount of all
expenses.
 */
// solution:-
let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"}
]
let totalExpenses = expenses.reduce((sum, expense) => sum +  expense.amount, 0);

console.log("Total Expenses:", totalExpenses)