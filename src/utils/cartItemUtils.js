export const cartItemsCount = cartItems => {
    return cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
};

export const cartItemsTotal = cartItems => {
    return cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0);
};
