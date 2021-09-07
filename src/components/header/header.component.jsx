import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {ReactComponent as Logo} from './crown-logo/4.1 crown.svg'
import { auth } from "../../firebase/firebase.utils";
import './header.styles.scss';

import { connect } from "react-redux";

const Header = ({currentUser, hidden}) => {
    return (
      <div className="header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link to="shop" className="option">
            SHOP
          </Link>
          <Link to="shop" className="option">
            CONTACT
          </Link>
          {currentUser ? ( // not null == True
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div> //auth.signOut {fireBase Method}
          ) : (
            // null == false
            <Link className="option" to="signin">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {
          !hidden && <CartDropdown />
        }
      </div>
    );
}

const mapStateToProps = ({user: {currentUser} , cart: {hidden}}) => ({
  currentUser ,
  hidden
  //from rootReducer Select the user and then from setUser Function select the currentUser;
});

export default connect(mapStateToProps)(Header);
// with mapStateToProps We/re connect our Component to Store.
// so Each time The Single-Source-Of-Truth Changes The Component Re-Render Itselfs.
// it's every thing that mapStatetoProps Done!