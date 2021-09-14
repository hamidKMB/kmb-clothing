import React from "react"
import { Route } from "react-router"

import CollectionOverview from "../../components/collection-overview/collection-overview.component"
import Collection from "../../components/collection/collection.component"


const ShopPage = ({match}) => {
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview}/>
            <Route path={`${match.path}/:collectionId`} component={Collection}/>
        </div>
    )
}

export default ShopPage