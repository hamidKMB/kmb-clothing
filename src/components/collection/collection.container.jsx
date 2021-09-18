import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import withSpinner from "../with-spinner/with-spinner.component";
import { selectIfFetchingCollections } from "../../redux/shop/shop-selectors";
import Collection from "./collection.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIfFetchingCollections(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(Collection);

export default CollectionContainer;
