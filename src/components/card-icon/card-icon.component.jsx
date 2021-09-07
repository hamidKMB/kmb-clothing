import React from "react";

import { connect } from "react-redux";
import toggleHidden from "../../redux/cart/cart-action";    

import {ReactComponent as ShoppingLogo } from "./11.2 shopping-bag.svg";

import './cart-icon.styles.scss';

const CartIcon = ({toggleHidden, cartItems}) => {
    return (
        <div className = "cart-icon" onClick={toggleHidden}>
            <ShoppingLogo className="shopping-icon" />
            <span className = "item-count">{cartItems.length}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleHidden: () => dispatch(toggleHidden())
});

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);