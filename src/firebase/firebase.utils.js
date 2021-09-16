import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { API_KEY } from "../F.API/API_KEY";

const config = {
  apiKey: API_KEY,
  authDomain: "kmb-clothing.firebaseapp.com",
  projectId: "kmb-clothing",
  storageBucket: "kmb-clothing.appspot.com",
  messagingSenderId: "1077416593430",
  appId: "1:1077416593430:web:ca94c05e977d0db6380d37",
};

firebase.initializeApp(config);

// function for add data to firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const details = await userRef.get(); //getting the snapshot of out Firestore
  //*****************************************************
  // everything that the two top lines done is :
  //checking that this User is EXIST in our Database or Not by theit Unique ID
  // to check that should we add user to DB or Not
  //*****************************************************

  if (!details.exists) {
    //if the user Doesn't exist Then Do this
    const { displayName, email } = userAuth;
    //create the properties the displayName and email
    const createdAt = new Date();
    // create the property created At
    try {
      await userRef.set({ displayName, createdAt, email, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

// preventing from reinitialize Each Time code Changed
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
// if already initialized, use that one

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//open the googleAuth PopUp
const provider = new firebase.auth.GoogleAuthProvider(); // sign in with Google Account
provider.setCustomParameters({ prompt: "select_account" }); // always open Google popup sign in when user clicks in sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
