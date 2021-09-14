import React from "react";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { connect } from "react-redux";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "./crown-logo/4.1 crown.svg";

import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionDiv,
  OptionLink,
} from "./header.styles";

import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="shop">CONTACT</OptionLink>
        {currentUser ? ( // not null == True
          <OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv> //auth.signOut {fireBase Method}
        ) : (
          // null == false
          <OptionLink to="signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  //from rootReducer Select the user and then from setUser Function select the currentUser;
});

export default connect(mapStateToProps)(Header);
// with mapStateToProps We/re connect our Component to Store.
// so Each time The Single-Source-Of-Truth Changes The Component Re-Render Itselfs.
// it's every thing that mapStatetoProps Done!
