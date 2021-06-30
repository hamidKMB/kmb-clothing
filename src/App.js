import React from 'react';
import { Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';

import HomePage from "./pages/home-page/homepage.component"
import ShopPage from "./pages/shop-page/shoppage.component"
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import "./App.css";

class App extends React.Component{
  unSubscribeFromAuth = null;   // The Concept Of Subscribtion 

  componentDidMount() {
    const {setCurrentUser} = this.props;

    //subscribe
    this.unSubscribeFromAuth = auth.onAuthStateChanged ( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); //pass the Authenticated User Details To The FireStore

        //--------------------------the Course Solution to Store Data On State-----------------
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            });
        });

        //----------------------my Solution to Store Data on State-----------------------------
        // const userData = await userRef.get();
        // this.setState(
        //   {
        //     currentUser: {
        //       id: userData.id,
        //       ...userData.data(),
        //     },
        //   }
        //   ,() => console.log(this.state)
        // );
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    //unsubscribe user when the component unmount
    this.unSubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInSignUp} />
          </Switch>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
