import React from "react";
import { Route } from "react-router";
import { connect } from "react-redux";

import CollectionContainer from "../../components/collection/collection.container";
import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";

import { fetchApiCallStartAsync } from "../../redux/shop/shop-actions";

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchApiCallStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchApiCallStartAsync: () => dispatch(fetchApiCallStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
