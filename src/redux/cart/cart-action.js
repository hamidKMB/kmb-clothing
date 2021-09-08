import cartTypes from "./cart-type"

const toggleHidden = () => ({
    type: cartTypes.TOGGLE_HIDDEN
    //payload is Optional and in here we don't need that
})

export default toggleHidden

export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    payload: item
})

export const clearItemFromCart = item => ({
    type: cartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})