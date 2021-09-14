import React from "react";

import {
  CartItemContainer,
  Image,
  ItemDetailsContainer,
  NameContainer,
} from "./cart-item.styles";

const CartIcon = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <NameContainer>{name}</NameContainer>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default CartIcon;
