import { ReactComponent as ShoppingItem} from "../../assets/cart-icon.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contex";

import "./cart-icon.styles.scss";

const  CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCart}>
      <ShoppingItem className="shopping-icon"/>
      <span className="item-count">27</span>
    </div>
  )
}

export default CartIcon;