/**
 * Q2. You have an object representin a customer order with properties orderId, productName, and quantity. Use destructurin to extract and print these properties.
 */
// solution:-
let order = {
    orderId: "90434",
    productName: "Mobile",
    quantity: 1
}
let {orderId, productName, quantity} = order

console.log(`OrderId: ${orderId}`)
console.log(`Product Name: ${productName}`)
console.log(`Quantity:, ${quantity}`)
