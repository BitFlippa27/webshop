import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Fragment } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { logOutUser } from "../../utils/firebase/firebase.utils.js";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector"; 
import { signOutStart } from "../../store/user/user.action";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo className="logo"/>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">
            SHOP 
          </NavLink>
          {currentUser ? (
              <NavLink as="span" onClick={signOutUser}>Logout</NavLink>
            ) : (
              <NavLink to="/auth">
                Login
              </NavLink>
            )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
       <Outlet /> 
    </Fragment>
  )
}

export default Navigation;