export const addItemToCart = (cartItems, cartItemToAdd) => {

    //checking if item to be added already exists
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );

        //if item exists return map function (creating new array) new object adding +1 to quantity prop
        if(existingCartItem) {
            return cartItems.map(cartItem => 
                cartItem.id === cartItemToAdd.id
                    //creating a new object spreading cartItem, adding a quantity prop + 1
                ? { ...cartItem, quantity: cartItem.quantity + 1 }

                    //if cartItem id does not match cartItemToAdd id return original cart item
                : cartItem
                )
        }

        //if cart item is not found return new array with existing cartItems add an object equal to cartItemToAdd, with a base quantity of 1
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]

};