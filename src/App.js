import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page/homepage.component"
import ShopPage from "./pages/shop-page/shoppage.component"
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from './components/header/header.component';
import { auth, createUserProfileDetails } from './firebase/firebase.utils';

import "./App.css";

class App extends React.Component{
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unSubscribeFromAuth = null;   // The Concept Of Subscribtion 

  componentDidMount() {
    //subscribe
    this.unSubscribeFromAuth = auth.onAuthStateChanged ( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDetails(userAuth); //pass the Authenticated User Details To The FireStore

        //--------------------------the Course Solution to Store Data On State-----------------
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state)
          );
        });

        //----------------------my Solution to Store Data on State-----------------------------
        // const userData = await userRef.get();
        // this.setState(
        //   {
        //     currentUser: {
        //       id: userData.id,
        //       ...userData.data(),
        //     },
        //   },
        //   () => console.log(this.state)
        // );
      }
      this.setState({currentUser: userAuth});
    })
  }

  componentWillUnmount(){
    //unsubscribe user when the component unmount
    this.unSubscribeFromAuth();
  }

  render() {
    return (
        <div>
          <Header current={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInSignUp} />
          </Switch>
        </div>
      );
  }
}

export default App;
