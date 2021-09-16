import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItemsForPreview } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../collection-preview/collection-preview.component";

import styled from "styled-components";

const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItemsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
