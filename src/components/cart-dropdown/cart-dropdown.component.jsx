import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }

  return (
  <CartDropdownContainer>
    <CartItems className='cart-items'>
      {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
    </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>    
  </CartDropdownContainer>
  )

}



export default CartDropdown;