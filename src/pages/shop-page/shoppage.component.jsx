import React from "react"

import { connect } from "react-redux"
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop/shop-selectors";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopPage = ({collection}) => {
    return(
        <div className="shop-page">
            {
                collection.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collection: selectShopItems
})

export default connect(mapStateToProps)(ShopPage)