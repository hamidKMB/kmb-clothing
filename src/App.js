import React from 'react';
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page/homepage.component"
import ShopPage from "./pages/shop-page/shoppage.component"
import SignInSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from './components/header/header.component';
import { auth } from './firebase/firebase.utils';

import "./App.css";

class App extends React.Component{
  constructor() {
    super()

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;  // The Concept Of Subscribtion 

  componentDidMount() {
    //subscribe
    this.onsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user })
      console.log(user);
    })
  }

  componentWillUnmount(){
    //unsubscribe user when the component unmount
    this.unsubscribeFromAuth()
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
