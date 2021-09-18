import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from "./collection-overview.component";
import withSpinner from "../with-spinner/with-spinner.component";
import { selectIsFetchingApiCall } from "../../redux/shop/shop-selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetchingApiCall,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
