import { createSelector } from "reselect";

import memoize from "lodash.memoize";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopItemsForPreview = createSelector(
  [selectShopItems],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((selectedUrlParam) =>
  createSelector([selectShopItems], (collections) =>
    collections ? collections[selectedUrlParam] : null
  )
);
