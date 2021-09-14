import React from "react";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selectors";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPage,
  Title,
  ItemsContainer,
  CollectionItemStyled,
} from "./collection.styles";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPage>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItemStyled
            className="styled-Component"
            key={item.id}
            item={item}
          />
        ))}
      </ItemsContainer>
    </CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
