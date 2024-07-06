/**
 * Q5. Continuing the previous coding challenge, now let’s implement the remove item from cart feature. On
calling the remove item closure function, the specified productId item must be removed from cartItems
array.Use javascript closures to achieve the output.
 */
 // solution:-
 function shopingCart() {
    const cartItems = [];
    function itemIndexInCart(productId) {
        return cartItems.findIndex(item => item.id === productId);
    }


    return {
        addItem: function(product) {
            const itemIndex = itemIndexInCart(product.id);


            if(itemIndex !== -1){
                cartItems[itemIndex].quantity++;
            }else{
                cartItems.push({id: product.id, name: product.name, price: product.price, quantity: 1});
            }
        },


        removeItem: function(productId) {
            const indexToRemove = itemIndexCart(productId);


            if(indexToRemove !== -1) {
                cartItems.splice(indexToRemove, 1);
            }
        },


        getCartItems: function(){
            return cartItems;
        }
    };
}


const cart = shopingCart();
console.log(`Cart Items: `,cart.getCartItems());


const product1 = {id: 1, name: 'product 1', price :10};
const product2 = {id: 2, name: 'product 2', price :20};


cart.addItem(product1);
cart.addItem(product2);
cart.addItem(product1);


console.log(`Cart Items: `,cart.getCartItems());