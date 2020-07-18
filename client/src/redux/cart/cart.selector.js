import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(selectCart, cart => cart.cartItems);
export const selectCartHidden = createSelector(selectCart, cart => cart.hidden);

export const selectCartItemsCount = createSelector(selectCartItems, cartItems =>
    cartItems.reduce((prev, cur) => prev + cur.quantity, 0)
);

export const selectCartItemsTotal = createSelector(selectCartItems, cartItems =>
    cartItems.reduce((prev, cur) => prev + cur.quantity * cur.price, 0)
);
