import React from "react";
import { Link } from "react-router-dom";

import {ReactComponent as Logo} from './crown-logo/4.1 crown.svg'
import './header.styles.scss';

const Header = () => {
    return (
      <div className="header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link to="shop" className="option">
            Shop
          </Link>
          <Link to="shop" className="option">
            Contact
          </Link>
        </div>
      </div>
    );
}

export default Header;
