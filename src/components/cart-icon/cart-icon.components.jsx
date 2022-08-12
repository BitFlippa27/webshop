import { ReactComponent as ShoppingItem} from "../../assets/cart-icon.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const  CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingItem className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon;