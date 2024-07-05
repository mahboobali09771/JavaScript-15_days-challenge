/**
 * Q6. You have a list of expenses, each with an amount and a category. Now, create a function named categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or
"Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array called categorizedExpenses, where each element represents the category for the corresponding expense in
the original list. Finally, print out the categorizedExpenses array.
 */
// solution:-
let expenses = [
    {amount: 100, category: "Utilities"},
    {amount: 200, category: "Groceries"},
    {amount: 50, category: "Entertainment"}
]
function categorizeExpense(expense){
    if(expense.amount > 100){
        return "High Expense"
    }
    else{
        return "Low Expense"
    }
}
let categorizedExpenses = expenses.map((expense) => categorizeExpense(expense))

console.log("Categorized Expenses:", categorizedExpenses)