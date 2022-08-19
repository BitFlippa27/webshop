import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { logOutUser } from "../../utils/firebase/firebase.utils.js";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  
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
              <NavLink as="span" onClick={logOutUser}>Logout</NavLink>
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