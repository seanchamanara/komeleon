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

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        //filter returning cartitems (minus matching cartItem id's which is removed)
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    return cartItems.map( cartItem => 
        cartItem.id === cartItemToRemove.id 

        //return new object spreading in cartItem with its propererties, but decrease the quantity property by one 
        ? {...cartItem, quantity: cartItem.quantity -1 }
        : cartItem
       
    );
}