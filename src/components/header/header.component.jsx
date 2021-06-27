import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as Logo} from './crown-logo/4.1 crown.svg'
import { auth } from "../../firebase/firebase.utils";
import './header.styles.scss';

const Header = ({current}) => {
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
          {current ? ( // not null == True
            <div className="option" onClick={() => auth.signOut()}>
              SIGN OUT
            </div> //auth.signOut {fireBase Method}
          ) : (
            // null == false
            <Link className="option" to="signin">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
    );
}

export default Header;
