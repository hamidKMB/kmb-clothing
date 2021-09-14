import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-action";
import {
  StyledCustomButton,
  CollectionItemsContainer,
  Image,
  CollectionFooterContainer,
  Name,
  Price,
} from "./collection-item.styles";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem, className }) => {
  const { name, imageUrl, price } = item;
  return (
    <CollectionItemsContainer className={className}>
      <Image
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <CollectionFooterContainer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </CollectionFooterContainer>
      <StyledCustomButton inverted onClick={() => addItem(item)}>
        Add to Cart
      </StyledCustomButton>
    </CollectionItemsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
