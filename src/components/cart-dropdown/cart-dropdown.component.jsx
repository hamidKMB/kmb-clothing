import React from "react";

import { withRouter } from "react-router";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { connect } from "react-redux"
import {createStructuredSelector} from "reselect"
import { selectCartItems } from "../../redux/cart/cart-selectors";

import "./cart-dropdown.styles.scss";
import toggleHidden from "../../redux/cart/cart-action";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
      <div className="cart-dropdown">
        <div className="cart-items">
          {
            cartItems.length ? 
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            : 
            <span className="empty-message">
              Your cart is Empty
            </span>
          }
        </div>
        <CustomButton onClick={() => {
          dispatch(toggleHidden())
          history.push("/checkout")
          }}>CHECKOUT</CustomButton>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

//the connect function imported from "react-redux" will automaticlly pass the
// dispatch as a props to component
// so we do not NEED to write the second function (mapDispatchToProps) to the 
// connect function.

export default withRouter(connect(mapStateToProps)(CartDropdown));