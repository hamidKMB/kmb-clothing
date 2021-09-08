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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const isCartItemToRemoveExist = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (isCartItemToRemoveExist.quantity === 1) {
        return(
            cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
        )
    }

    return cartItems.map((item) => 
        item.id === cartItemToRemove.id ?
            {...item, quantity: item.quantity - 1 }
        :   
            item
    )
}