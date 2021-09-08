import React from "react";

import { connect } from "react-redux";
import toggleHidden from "../../redux/cart/cart-action";    
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import {ReactComponent as ShoppingLogo } from "./11.2 shopping-bag.svg";

import './cart-icon.styles.scss';

const CartIcon = ({toggleHidden, cartItemsCount}) => {
    return (
        <div className = "cart-icon" onClick={toggleHidden}>
            <ShoppingLogo className="shopping-icon" />
            <span className = "item-count">{cartItemsCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
});

const mapStateToProps = (state) => ({
    // cartItemsCount: cartItems.reduce((accumalatedQuantity, cartItem) => 
    //     accumalatedQuantity + cartItem.quantity ,
    //     0)
    cartItemsCount: selectCartItemsCount(state)
})
//with commented method react re-render the cart Each time we Add To Cart.
//with Reselect we Can Get Benefit of Memoization

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);