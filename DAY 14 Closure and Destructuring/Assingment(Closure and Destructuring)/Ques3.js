/**
 * Q3. In this coding challenge let's try to implement the cart feature using javascript closure. Using JS closures
try to create a cart array and return a function to getCartItems.
 */
// solution:-
function shoppingCart(){
    const cartItems = [];
    return{
        getCartItems: function(){
            return cartItems;
        }
    }
}
const cart = shoppingCart();
console.log("Cart Items: ",cart.getCartItems())