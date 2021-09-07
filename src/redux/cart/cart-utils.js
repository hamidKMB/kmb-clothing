export const addItemToCart = (cartItems, cartItemToAdd) => {
    const isCartItemToAddExist = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        )

    if (isCartItemToAddExist) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity: cartItem.quantity + 1} :
            cartItem
        )
    } else {
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
    }
}