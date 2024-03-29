import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector"
import { 
  clearItemFromCart, 
  removeItemFromCart, 
  addItemToCart
} from "../../store/cart/cart.action";
import { 
  CheckoutItemContainer, 
  ImageContainer,
  Image,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton
 } from "./checkout-item.styles";


const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  //const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);
  const { name, price, quantity, imageUrl } = cartItem;

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`}/>
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#8722;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#43;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}
export default CheckoutItem;