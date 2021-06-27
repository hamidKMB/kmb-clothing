import firebase from "firebase/app"
import 'firebase/auth'
import 'firebase/firestore'
import API_KEY from "../F.API";

const config = {
    apiKey: API_KEY ,
    authDomain: "kmb-clothing.firebaseapp.com",
    projectId: "kmb-clothing",
    storageBucket: "kmb-clothing.appspot.com",
    messagingSenderId: "1077416593430",
    appId: "1:1077416593430:web:ca94c05e977d0db6380d37"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // sign in with Google Account 
provider.setCustomParameters({prompt:"select_account"}) // always open Google popup sign in when user clicks in sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;