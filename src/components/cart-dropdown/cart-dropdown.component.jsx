import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { Routes } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  }

  return (
  <div className='cart-dropdown-container'>
    <div className='cart-items'>
      {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
    </div>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>    
  </div>
  )

}



export default CartDropdown;