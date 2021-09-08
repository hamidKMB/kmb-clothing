import React from "react"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart-selectors"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"

import "./checkout.styles.scss"

const CheckoutPage = ({cartItems, total}) => {
    const checkoutHeader = ["Product", "Description", "Quantity", "Price", "Remove"] //header-Blocks
    return (
      <div className="checkout-page">
        <div className="checkout-header">
          {checkoutHeader.map((item, index) => (
            <div className="header-block" key={index}>
              <span>{item}</span>
            </div>
          ))}
        </div>
        {cartItems.map((item) => (
          <CheckoutItem key={item.id} cartItem={item} />
        ))}
        <div className="total">
          <span>TOTAL: ${total}</span>
        </div>
      </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems ,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)