import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import ReactCheckoutStripe from "../../components/react-checkout-stripe/checkout-stripe.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  TotalContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
  const checkoutHeader = [
    "Product",
    "Description",
    "Quantity",
    "Price",
    "Remove",
  ]; //header-Blocks
  return (
    <CheckoutPageContainer>
      {cartItems.length !== 0 ? (
        <>
          <CheckoutHeaderContainer>
            {checkoutHeader.map((item, index) => (
              <HeaderBlock key={index}>
                <span>{item}</span>
              </HeaderBlock>
            ))}
          </CheckoutHeaderContainer>
          {cartItems.map((item) => (
            <CheckoutItem key={item.id} cartItem={item} />
          ))}
          <TotalContainer>
            <span>TOTAL: ${total}</span>
          </TotalContainer>
          <ReactCheckoutStripe price={total} />
        </>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
