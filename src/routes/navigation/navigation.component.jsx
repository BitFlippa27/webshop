import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg"
import { logOutUser } from "../../utils/firebase/firebase.utils.js";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon.components";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Logo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP 
          </Link>
          {currentUser ? (
              <span className="nav-link" onClick={logOutUser}>Logout</span>
            ) : (
              <Link className="nav-link" to="/auth">
                Login
              </Link>
            )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
       <Outlet /> 
    </Fragment>
  )
}

export default Navigation;