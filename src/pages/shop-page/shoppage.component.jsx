import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import Collection from "../../components/collection/collection.component";
import withSpinner from "../../components/with-spinner/with-spinner.component";

import {
  selectIsFetchingApiCall,
  selectIfFetchingCollections,
} from "../../redux/shop/shop-selectors";
import { fetchApiCallStartAsync } from "../../redux/shop/shop-actions";

const CollectionOverviewWithSpinner = withSpinner(CollectionOverview);
const CollectionWithSpinenr = withSpinner(Collection);

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchApiCallStartAsync();
  }

  render() {
    const { match, isFetchingCollectionApi, isFetchingCollectionsExist } =
      this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner
              isLoading={isFetchingCollectionApi}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionWithSpinenr
              isLoading={!isFetchingCollectionsExist}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetchingCollectionApi: selectIsFetchingApiCall,
  isFetchingCollectionsExist: selectIfFetchingCollections,
});

const mapDispatchToProps = (dispatch) => ({
  fetchApiCallStartAsync: () => dispatch(fetchApiCallStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
