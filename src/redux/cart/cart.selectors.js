import { createSelector } from 'reselect';

//input selector is a function that returns a slice of state
const selectCart = state => state.cart;

//memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce( (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
        )
);