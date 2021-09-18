import shopActionTypes from "./shop-types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchApiCallStart = () => ({
  type: shopActionTypes.FETCH_APICALL_START,
});

export const fetchApiCallSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_APICALL_SUCCESS,
  payload: collectionsMap,
});

export const fetchApiCallFailed = (errorMessage) => ({
  type: shopActionTypes.FETCH_APICALL_FAILED,
  payload: errorMessage,
});

export const fetchApiCallStartAsync = () => {
  //this is Redux-Thunk
  return (dispatch) => {
    const collectionRef = firestore.collection("collection");
    dispatch(fetchApiCallStart);

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchApiCallSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchApiCallFailed(error.message)));
  };
};
