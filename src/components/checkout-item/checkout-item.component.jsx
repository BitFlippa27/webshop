import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem}) => {
  const {removeItemFromCart} = useContext(CartContext);
  const { name, price, quantity, imageUrl } = cartItem;
  
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`}/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
    </div>
  )
}
export default CheckoutItem;