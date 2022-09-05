import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartContext } from '../../contexts/cart.context';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  //const { cartItems } = useContext(CartContext);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }

  return (
  <CartDropdownContainer>
    <CartItems className='cart-items'>
      {
        cartItems.length ? (cartItems.map(item => 
          <CartItem cartItem={item} key={item.id}/>)) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
      }
    </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>    
  </CartDropdownContainer>
  )

}



export default CartDropdown;