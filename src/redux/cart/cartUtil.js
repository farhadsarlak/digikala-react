export const addItemToCart=(cartItems, cartItemToAdd)=>{
    const existingCartItem= cartItems.find(
        cartItem=> cartItem.id === cartItemToAdd.id
    );

    if(existingCartItem){
        return cartItems.map(cartItem=>
            cartItem.id===cartItemToAdd.id
                ? {...cartItem,quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [ ...cartItems, {...cartItemToAdd,quantity: 1} ]

};

export const removeItemFromCart=(cartItems, cartItemToRemove)=>(
    cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id)
);

export const decrementItem=(cartItems,cartItemToDec)=> {
    const existingCartItem= cartItems.find(
        cartItem=> cartItem.id === cartItemToDec.id
    );
    if (existingCartItem.quantity<=1){
        return cartItems.filter(cartItem=> cartItem.id !== cartItemToDec.id)
    }else {
        return(
            cartItems.map(cartItem => (
                cartItem.id === cartItemToDec.id
                    ?
                    {...cartItem , quantity: cartItem.quantity - 1}
                    :
                    cartItem
            ))
        )
    }
};