import cartTypes from "./cart-type"

const toggleHidden = () => ({
    type: cartTypes.TOGGLE_HIDDEN
    //payload is Optional and in here we don't need that
})

export default toggleHidden